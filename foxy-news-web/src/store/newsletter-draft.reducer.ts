import {Action} from 'redux';
import {AppState} from '../app-state/app-state';
import {Injector} from '../injector/injector';
import {NewsletterLinkToggled} from './newsletter-link-toggled.action';

export const newsletterDraftReducer = (injector: Injector) => {
  return (state: AppState, action: Action): AppState => {
    if (NewsletterLinkToggled.is(action)) {
      const linkId = action.payload.id;
      if (!state.newsletterDraft) {
        return {
          ...state,
          newsletterDraft: {
            links: [state.links[linkId]],
            id: '',
            summary: '',
            title: '',
            date: ''
          }
        };
      } else if (state.newsletterDraft.links.map(link => link.id) === [linkId]) {
        return {
          ...state,
          newsletterDraft: undefined
        };
      } else {
        return {
          ...state,
          newsletterDraft: {
            ...state.newsletterDraft,
            links: [...state.newsletterDraft.links, state.links[linkId]]
          }
        };
      }
    } else {
      return state;
    }
  }
};
