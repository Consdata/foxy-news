import * as nodeFetch from 'node-fetch';

export async function slackChatPostMessage(
  config: import('firebase-functions').config.Config,
  channel: string,
  body: any
) {
  const bodyJson = JSON.stringify({
    channel: channel,
    ...body
  });
  const httpResult = await nodeFetch(`https://slack.com/api/chat.postMessage`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${config.slack.bottoken}`,
      'Content-type': 'application/json'
    },
    body: bodyJson
  });
  return await httpResult.json();
}
