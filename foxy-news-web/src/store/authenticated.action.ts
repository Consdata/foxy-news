import {ReadOnlyNested} from '../util/read-only-nested.type';

type AuthenticatedAction = ReadOnlyNested<ReturnType<typeof Authenticated.of>>;

export class Authenticated {
  static readonly type: 'Authenticated' = 'Authenticated';
  static of = (user: string) => {
    return {
      type: Authenticated.type,
      payload: {
        user
      }
    };
  };
  static is = (obj: any): obj is AuthenticatedAction => obj.type === Authenticated.type;
}
