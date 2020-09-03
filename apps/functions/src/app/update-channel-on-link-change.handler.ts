import {PendingLink} from '@foxy-news/links';
import {linkSlackPost} from './link-slack-post';
import {slackChatUpdateMessage} from './slack/slack-chat-update-message';

export const updateChannelOnLinkChangeHandler = (
  functions: import('firebase-functions').FunctionBuilder,
  config: import('firebase-functions').config.Config
) => functions.firestore.document('team/{team}/field/{field}/link/{linkId}').onUpdate(
  async (change, context) => {
    const linkData = change.after.data() as PendingLink;
    await slackChatUpdateMessage(
      config,
      linkData.message.channel,
      linkData.message.timestamp,
      {
        'blocks': linkSlackPost(
          linkData.data.summary,
          linkData.data.description,
          linkData.data.link,
          linkData.data.category,
          '',
          linkData.data.author,
          true,
          linkData.votes,
          Object.keys(linkData.userVotes ?? {})
        )
      }
    )
  }
);

