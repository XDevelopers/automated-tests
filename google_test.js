Feature('google');

Scenario('test google',  ({ I }) => {
  I.amOnPage('/');
  I.wait(10);
  I.fillField("textarea[name='q']", "Marcio Lourenço");
  I.wait(10);

});
