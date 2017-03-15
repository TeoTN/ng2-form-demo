import { Ng2FormDemoPage } from './app.po';

describe('ng2-form-demo App', () => {
  let page: Ng2FormDemoPage;

  beforeEach(() => {
    page = new Ng2FormDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
