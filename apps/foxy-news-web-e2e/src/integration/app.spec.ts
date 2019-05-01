import { getLogo } from '../support/app.po';

describe('Hello Nx', () => {
  beforeEach(() => cy.visit('/'));

  it('should display app logo', () => {
    getLogo().contains('Foxy News');
  });
});
