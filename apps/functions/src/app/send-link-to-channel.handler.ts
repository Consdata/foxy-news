import * as nodeFetch from 'node-fetch';
import {linkSlackPost} from './link-slack-post';
import {SlackPostMessageResult} from './slack/slack-post-message-result';

export const sendLinkToChannelHandler = (
    functions: import('firebase-functions').FunctionBuilder,
    config: import('firebase-functions').config.Config
) => functions.firestore.document('team/{team}/field/{field}/link/{linkId}').onCreate(
    async (document, context) => {
        const result = await postMessage(config, document);
        await document.ref.update({
            message: {
                timestamp: result.ts,
                channel: result.channel
            },
        });
    }
);

async function postMessage(config: import('firebase-functions').config.Config, document: FirebaseFirestore.QueryDocumentSnapshot<FirebaseFirestore.DocumentData>): Promise<SlackPostMessageResult> {
    const httpResult = await nodeFetch(`https://slack.com/api/chat.postMessage`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${config.slack.bottoken}`,
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            channel: `#${config.foxy['channel-' + document.data().field]}`,
            'blocks': linkSlackPost(
                document.data().data.summary,
                document.data().data.description,
                document.data().data.link,
                document.data().data.category,
                ''
            )
        })
    });
    return httpResult.json() as SlackPostMessageResult;
}

