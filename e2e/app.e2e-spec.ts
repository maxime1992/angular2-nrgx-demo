import { Angular20Page } from './app.po';

describe('angular-2-0 App', function() {
  let page: Angular20Page;

  beforeEach(() => {
    page = new Angular20Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
