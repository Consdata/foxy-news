import {Link} from '../app-state/app-state';
import {ReadOnlyNested} from '../util/read-only-nested.type';

type LinkAddAction = ReadOnlyNested<ReturnType<typeof LinkAdd.of>>;

export class LinkAdd {
  static readonly type: 'Authenticated' = 'Authenticated';
  static of = (link: Link) => {
    return {
      type: LinkAdd.type,
      payload: {
        link
      }
    };
  };
  static is = (obj: any): obj is LinkAdd => obj.type === LinkAdd.type;
}
