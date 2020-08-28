import {onAddLinkSubmission} from './chatbot/add-link-submission';
import {ChatbotInteraction} from './chatbot/chatbot-interaction';
import {onShortcutAddLinkTech} from './chatbot/chatbot-shortcut-add-link-tech';
import {FieldMap} from './chatbot/field-map';
import {onVote} from './chatbot/on-vote';
import {checkSlackSignature} from './slack/check-slack-signature';

export const chatbotHandler = (
    functions: import('firebase-functions').FunctionBuilder,
    config: import('firebase-functions').config.Config,
    pubsub: import('@google-cloud/pubsub').PubSub) => {

    const fieldMap: FieldMap = {
        channelByField: {
            tech: config.foxy['channel-tech'],
            biz: config.foxy['channel-biz'],
        },
        fieldByChannel: {
            [config.foxy['channel-tech']]: 'tech',
            [config.foxy['channel-biz']]: 'biz'
        }
    };

    return functions.https.onRequest(async (request, response) => {
        if (request.method !== 'POST') {
            response.status(405).send('Invalid request method (only POST allowed)');
        }
        if (!checkSlackSignature(
            config.slack.signingsecret,
            request.headers['x-slack-signature'] as string,
            request.headers['x-slack-request-timestamp'],
            request.rawBody.toString()
        )) {
            console.error('Invalid slack signing');
            response.status(401).send('Invalid slack signing');
            return;
        }

        const slackHttpHeaders = {Authorization: `Bearer ${config.slack.bottoken}`, 'Content-type': 'application/json'};

        const interaction: ChatbotInteraction = JSON.parse(request.body.payload);
        if (interaction.type === 'shortcut' && interaction.callback_id === 'addLink_tech') {
            await onShortcutAddLinkTech(slackHttpHeaders, interaction);
        } else if (interaction.type === 'view_submission') {
            await onAddLinkSubmission(pubsub, interaction);
        } else if (interaction.type === 'block_actions') {
            await onVote(pubsub, interaction, fieldMap);
        } else {
            console.log(JSON.stringify(interaction));
        }

        response.status(200).send();
    })

};
