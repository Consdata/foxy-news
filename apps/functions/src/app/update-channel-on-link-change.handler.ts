import * as nodeFetch from 'node-fetch';
import {Link} from './link';
import {linkSlackPost} from './link-slack-post';

export const updateChannelOnLinkChangeHandler = (
  functions: import('firebase-functions').FunctionBuilder,
  config: import('firebase-functions').config.Config
) => functions.firestore.document('team/{team}/field/{field}/link/{linkId}').onUpdate(
  async (change, context) => {
    const linkData = change.after.data() as Link;
    await nodeFetch(`https://slack.com/api/chat.update`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${config.slack.bottoken}`,
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        channel: linkData.message.channel,
        ts: linkData.message.timestamp,
        'blocks': linkSlackPost(
          linkData.data.summary,
          linkData.data.description,
          linkData.data.link,
          linkData.data.category,
          '',
          linkData.data.author,
          linkData.votes,
          Object.keys(linkData.userVotes ?? {})
        )
      })
    });
  }
);

