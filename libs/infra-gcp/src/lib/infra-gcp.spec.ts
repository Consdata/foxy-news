import { infraGcp } from './infra-gcp';

describe('infraGcp', () => {
  it('should work', () => {
    expect(infraGcp()).toEqual('infra-gcp');
  });
});
