import {ReadOnlyNested} from '../util/read-only-nested.type';

type NewsletterLinkToggledAction = ReadOnlyNested<ReturnType<typeof NewsletterLinkToggled.of>>;

export class NewsletterLinkToggled {
  static readonly type: 'NewsletterLinkToggled' = 'NewsletterLinkToggled';
  static of = (id: string) => {
    return {
      type: NewsletterLinkToggled.type,
      payload: {
        id
      }
    };
  };
  static is = (obj: any): obj is NewsletterLinkToggledAction => obj.type === NewsletterLinkToggled.type;
}
