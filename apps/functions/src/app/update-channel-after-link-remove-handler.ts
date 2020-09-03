import {PendingLink} from '@foxy-news/links';
import {linkSlackPost} from './link-slack-post';
import {slackChatUpdateMessage} from './slack/slack-chat-update-message';

export const updateChannelAfterLinkRemoveHandler = (
  functions: import('firebase-functions').FunctionBuilder,
  config: import('firebase-functions').config.Config
) => functions.firestore.document('team/{team}/field/{field}/link/{linkId}').onDelete(
  async (snapshot, context) => {
    const linkData = snapshot.data() as PendingLink;
    if (linkData.message.channel && linkData.message.timestamp) {
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
            false,
            linkData.votes,
            Object.keys(linkData.userVotes ?? {})
          )
        }
      );
    }
  }
);
