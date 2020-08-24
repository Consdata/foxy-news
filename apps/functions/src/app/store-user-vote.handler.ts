import * as nodeFetch from 'node-fetch';
import {PendingVote} from './chatbot/pending-vote';

const alreadyVotedMessages = [
  `You can't touch this!`,
  `Oh, you naughty user!`,
  `You shall not pass!`
];

export const storeUserVoteHandler = (
  functions: import('firebase-functions').FunctionBuilder,
  config: import('firebase-functions').config.Config,
  firebase: typeof import('firebase-admin')) => {
  return functions.pubsub.topic('pending-votes').onPublish(
    async (topicMessage, context) => {
      const vote: PendingVote = JSON.parse(Buffer.from(topicMessage.data, 'base64').toString());
      const firestore = firebase.firestore();
      const linkCollection = firestore.collection(`team/${vote.team}/field/${vote.field}/link`);
      await firestore.runTransaction(async trn => {
        const links = await trn.get(linkCollection.where('message.timestamp', '==', vote.message).limit(1));
        const link = links.docs[0];
        const linkData = link.data();
        if (linkData.userVotes?.[vote.user] !== true) {
          trn.update(link.ref, {
            votes: (linkData.votes ?? 0) + 1,
            userVotes: {
              ...linkData.userVotes,
              [vote.user]: true
            }
          });
        } else {
          await nodeFetch(`https://slack.com/api/chat.postEphemeral`, {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${config.slack.bottoken}`,
              'Content-type': 'application/json'
            },
            body: JSON.stringify({
              channel: vote.ephemeral.channelId,
              user: vote.ephemeral.userId,
              text: `You already voted for ${vote.link}!`,
              attachments: [
                {
                  color: `#c0392b`,
                  text: alreadyVotedMessages[getRandomInt(0, alreadyVotedMessages.length)],
                }
              ]

            })
          });
        }
      });
    }
  );
}

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
