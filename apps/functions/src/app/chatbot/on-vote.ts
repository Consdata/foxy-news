import {SlackInteractionRequest} from '../slack/slack-interaction-request';
import {FieldMap} from './field-map';
import {PendingVote} from './pending-vote';

export async function onVote(pubsub: import('@google-cloud/pubsub').PubSub, interaction: SlackInteractionRequest, fieldMap: FieldMap) {
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
  console.log(JSON.stringify({interaction, message, fieldMap}))
  await pubsub.topic('pending-votes').publish(Buffer.from(JSON.stringify(message)));
}
