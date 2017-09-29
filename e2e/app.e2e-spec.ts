import { WrapperPage } from './app.po';

describe('wrapper App', () => {
  let page: WrapperPage;

  beforeEach(() => {
    page = new WrapperPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
