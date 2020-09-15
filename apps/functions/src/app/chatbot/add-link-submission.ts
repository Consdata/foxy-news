import {SlackViewSubmission} from '../slack/slack-view-submission';
import {ChatbotLink} from './chatbot-link';
import {FieldMap} from './field-map';

export async function onAddLinkSubmission(
  pubsub: import('@google-cloud/pubsub').PubSub,
  fieldMap: FieldMap,
  viewSubmission: SlackViewSubmission) {
  const message: ChatbotLink = {
    team: viewSubmission.team.domain,
    user: viewSubmission.user.username,
    field: fieldMap.fieldByCallback[viewSubmission.view.callback_id],
    data: {
      category: viewSubmission.view.state.values.category.category.selected_option.value,
      summary: viewSubmission.view.state.values.summary.summary.value,
      link: viewSubmission.view.state.values.link.link.value,
      description: viewSubmission.view.state.values.description.description.value,
      author: viewSubmission.user.username
    }
  };
  await pubsub.topic('pending-links').publish(Buffer.from(JSON.stringify(message)));
}
