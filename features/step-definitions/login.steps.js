var {defineSupportCode} = require('cucumber');
var {expect} = require('chai');

defineSupportCode(({Given, When, Then}) => {
    Given('I go to losestudiantes home screen', () => {
        browser.url('/');
        if(browser.isVisible('button=Cerrar')) {
            browser.click('button=Cerrar');
        }
        browser.waitForVisible('.botonIngresar', 8000);
    });

    When('I open the login screen', () => {
        browser.waitForVisible('.botonIngresar', 8000);
        var buttonIngresar = browser.element('.botonIngresar');
        buttonIngresar.click();
    });

    When('I fill a wrong email and password', () => {
        var cajaLogIn = browser.element('.cajaLogIn');

        var mailInput = cajaLogIn.element('input[name="correo"]');
        mailInput.click();
        mailInput.keys('wrongemail@example.com');

        var passwordInput = cajaLogIn.element('input[name="password"]');
        passwordInput.click();
        passwordInput.keys('123467891')
    });

    When('I try to login', () => {
        var cajaLogIn = browser.element('.cajaLogIn');
        cajaLogIn.element('button=Ingresar').click()
    });

    Then('I expect to not be able to login', () => {
        browser.waitForVisible('.aviso.alert.alert-danger', 15000);
    });



    When(/^I fill with (.*) and (.*)$/ , (email, password) => {
        var cajaLogIn = browser.element('.cajaLogIn');

        var mailInput = cajaLogIn.element('input[name="correo"]');
        mailInput.click();
        mailInput.keys(email);

        var passwordInput = cajaLogIn.element('input[name="password"]');
        passwordInput.click();
        passwordInput.keys(password)
    });

    Then('I expect to see {string}', error => {
        browser.waitForVisible('.aviso.alert.alert-danger', 5000);
        var alertText = browser.element('.aviso.alert.alert-danger').getText();
        expect(alertText).to.include(error);
    });

});