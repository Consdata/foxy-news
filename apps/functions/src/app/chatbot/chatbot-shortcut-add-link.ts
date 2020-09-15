import {categoriesTech} from '@foxy-news/categories';
import * as nodeFetch from 'node-fetch';
import {categoriesBiz} from '../../../../../libs/categories/src/lib/categories-biz';
import {newsletterModalView} from '../newsletter-modal-view';
import {SlackInteractionRequest} from '../slack/slack-interaction-request';

export async function onShortcutAddLink(slackHttpHeaders: any, interactionRequest: SlackInteractionRequest) {
  const callbackId = interactionRequest.callback_id;
  const categories = interactionRequest.callback_id === 'addLink_tech' ? categoriesTech : categoriesBiz;
  await nodeFetch(`https://slack.com/api/views.open`, {
    method: 'POST',
    headers: slackHttpHeaders,
    body: JSON.stringify({
      trigger_id: interactionRequest.trigger_id,
      view: newsletterModalView(
        callbackId,
        categories
      )
    })
  });
}
