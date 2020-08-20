import {checkSlackSignature} from './slack/check-slack-signature';

export const chatbotHandler = (
    functions: import('firebase-functions').FunctionBuilder,
    config: import('firebase-functions').config.Config,
    pubsub: import('@google-cloud/pubsub').PubSub) =>
    functions.https.onRequest(async (request, response) => {
        if (request.method !== 'POST') {
            response.status(405).send('Invalid request method (only POST allowed)');
        }
        if (!checkSlackSignature(
            config.slack.signingsecret,
            request.headers['x-slack-signature'] as string,
            request.headers['x-slack-request-timestamp'],
            request.rawBody.toString()
        )) {
            response.status(401).send('Invalid slack signing');
        }

        response.contentType('json')
            .status(200)
            .send({
                'response_type': 'ephemeral',
                'text': `Please use /news`
            });
    });
