import * as nodeFetch from 'node-fetch';
import {newsletterModalView} from '../newsletter-modal-view';
import {ChatbotInteraction} from './chatbot-interaction';

export async function onShortcutAddLinkTech(slackHttpHeaders: any, interactionRequest: ChatbotInteraction) {
  await nodeFetch(`https://slack.com/api/views.open`, {
    method: 'POST',
    headers: slackHttpHeaders,
    body: JSON.stringify({
      trigger_id: interactionRequest.trigger_id,
      view: newsletterModalView(
        'addLink_tech',
        [
          {key: 'devops', label: 'DevOps'},
          {key: 'frontend', label: 'Frontend'},
          {key: 'webdev', label: 'WebDev'},
          {key: 'cloud', label: 'Cloud'},
          {key: 'crafsmanship', label: 'Crsafsmanship'},
          {key: 'uiux', label: 'Ui/Ux'},
          {key: 'linux', label: 'Linux'},
          {key: 'security', label: 'Security'},
          {key: 'misc', label: 'Miscellaneous'},
        ]
      )
    })
  });
}
