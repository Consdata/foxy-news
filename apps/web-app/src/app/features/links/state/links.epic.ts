import {combineEpics} from 'redux-observable';
import {addLinkToNewsletterEpic} from './add-link-to-newsletter/add-link-to-newsletter.epic';
import {editLinkEpic} from './edit-link/edit-link.epic';
import {fetchLinksEpic} from './fetch-links/fetch-links.epic';
import {fetchNewsletterDraftEpic} from './fetch-newsletter-draft/fetch-newsletter-draft.epic';
import {publishNewsletterEpic} from './publish-newsletter/publish-newsletter.epic';

export const linksEpic = combineEpics(
  fetchLinksEpic,
  fetchNewsletterDraftEpic,
  editLinkEpic,
  addLinkToNewsletterEpic,
  publishNewsletterEpic
)
