import {SlackInteractionRequest} from './slack-interaction-request';

export interface SlackViewSubmission extends SlackInteractionRequest {
  view: {
    app_id: string;
    callback_id: string;
    state: {
      values: {
        [key: string]: any
      };
    }
  }
}
