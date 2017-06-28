import { HttpRequestPage } from './app.po';

describe('http-request App', () => {
  let page: HttpRequestPage;

  beforeEach(() => {
    page = new HttpRequestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
