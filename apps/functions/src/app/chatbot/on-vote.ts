import {ChatbotInteraction} from './chatbot-interaction';
import {FieldMap} from './field-map';
import {PendingVote} from './pending-vote';

export async function onVote(pubsub: import('@google-cloud/pubsub').PubSub, interaction: ChatbotInteraction, fieldMap: FieldMap) {
    const message: PendingVote = {
        team: interaction.team.domain,
        user: interaction.user.username,
        field: fieldMap.fieldByChannel[interaction['channel'].name],
        message: interaction['message'].ts
    };
    await pubsub.topic('pending-votes').publish(Buffer.from(JSON.stringify(message)));
}