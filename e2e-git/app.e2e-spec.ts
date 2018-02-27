import { Angular2EndToEndPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('angular2-end-to-end App', function() {
  let page: Angular2EndToEndPage;

  beforeEach(() => {
    page = new Angular2EndToEndPage();
  });

  it('should show three todos when we first load the todo app', () => {
    browser.get('/');
    const todos = element.all(by.css('.todos .todo'));
    expect(todos.count()).toEqual(3);
  });

  it('should be able to add a new todo', () => {
    browser.get('/');
    const newTodoInput = element(by.css('.add-todo input[type=text]'));
    newTodoInput.sendKeys('Todo 4');

    const newTodoSubmitButton = element(by.css('.add-todo input[type=submit]'));
    newTodoSubmitButton.click();

    const todos = element.all(by.css('.todos .todo'));
    expect(todos.count()).toEqual(4);
  });
});
