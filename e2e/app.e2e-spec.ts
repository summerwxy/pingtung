import { PingtungPage } from './app.po';

describe('pingtung App', () => {
  let page: PingtungPage;

  beforeEach(() => {
    page = new PingtungPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
