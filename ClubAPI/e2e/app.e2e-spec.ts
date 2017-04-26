import { Homework14Angular4Page } from './app.po';

describe('homework14-angular4 App', () => {
  let page: Homework14Angular4Page;

  beforeEach(() => {
    page = new Homework14Angular4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
