import {ChatbotInteraction} from './chatbot-interaction';
import {FieldMap} from './field-map';
import {PendingVote} from './pending-vote';

export async function onVote(pubsub: import('@google-cloud/pubsub').PubSub, interaction: ChatbotInteraction, fieldMap: FieldMap) {
  const message: PendingVote = {
    team: interaction.team.domain,
    user: interaction.user.username,
    field: fieldMap.fieldByChannel[interaction['channel'].name],
    message: interaction['message'].ts,
    link: interaction['message'].blocks[2].text.text,
    ephemeral: {
      channelId: interaction['channel'].id,
      userId: interaction.user.id
    }
  };
  await pubsub.topic('pending-votes').publish(Buffer.from(JSON.stringify(message)));
}
