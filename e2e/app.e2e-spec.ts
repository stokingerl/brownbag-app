import { BrownbagAppPage } from './app.po';

describe('brownbag-app App', function() {
  let page: BrownbagAppPage;

  beforeEach(() => {
    page = new BrownbagAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
