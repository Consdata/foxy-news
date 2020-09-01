import * as nodeFetch from 'node-fetch';

export async function slackChatUpdateMessage(
  config: import('firebase-functions').config.Config,
  channel: string,
  ts: string,
  body: any
) {
  const bodyJson = JSON.stringify({
    channel: channel,
    ts: ts,
    ...body
  });
  const httpResult = await nodeFetch(`https://slack.com/api/chat.update`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${config.slack.bottoken}`,
      'Content-type': 'application/json'
    },
    body: bodyJson
  });
  return await httpResult.json();
}
