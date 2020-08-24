import {PendingVote} from './chatbot/pending-vote';

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
                    const update = {
                        votes: (linkData.votes ?? 0) + 1,
                        userVotes: {
                            ...linkData.userVotes,
                            [vote.user]: true
                        }
                    };
                    trn.update(link.ref, update);
                    return {
                        ...linkData,
                        ...update
                    };
                }
            });
        }
    );
}
