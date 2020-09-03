import {PendingLink} from '@foxy-news/links';
import {linkSlackPost} from './link-slack-post';
import {slackChatPostMessage} from './slack/slack-chat-post-message';
import {slackChatUpdateMessage} from './slack/slack-chat-update-message';

export const sendLinkToChannelHandler = (
  functions: import('firebase-functions').FunctionBuilder,
  config: import('firebase-functions').config.Config
) => functions.firestore.document('team/{team}/field/{field}/link/{linkId}').onCreate(
  async (document, context) => {
    const link = document.data() as PendingLink;
    const message = pendingLinkMessage(link);
    if (link.message && link.message.timestamp && link.message.channel) {
      await slackChatUpdateMessage(config, link.message.channel, link.message.timestamp, message);
    } else {
      const result = await slackChatPostMessage(config, `#${config.foxy['channel-' + link.field]}`, message);
      await document.ref.update({
        message: {
          timestamp: result.ts,
          channel: result.channel
        },
      });
    }
  }
);

function pendingLinkMessage(link: PendingLink): any {
  return {
    'blocks': linkSlackPost(
      link.data.summary,
      link.data.description,
      link.data.link,
      link.data.category,
      '',
      link.data.author,
      true,
      0,
      Object.keys(link.userVotes ?? {})
    )
  };
}

