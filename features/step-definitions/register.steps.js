var {defineSupportCode} = require('cucumber');
var {expect} = require('chai');

defineSupportCode(({Given, When, Then}) => {

    When('I open the register screen', () => {
        if (browser.isVisible('.modal-body')) {
            browser.waitForVisible('.botonIngresar', 5000);
        }
        browser.waitForVisible('.botonIngresar', 5000);
        browser.element('.botonIngresar').click();
    });

    When(/^I fill resister form with (.*), (.*), (.*), (.*), (.*) and (.*)$/, (name, lastname, email, password, programa, accept) => {
        browser.waitForVisible('.cajaSignUp', 5000);

        var cajaSignUp = browser.element('.cajaSignUp');

        browser.waitForVisible('input[name="nombre"]', 5000);
        browser.waitForVisible('input[name="apellido"]', 5000);
        browser.waitForVisible('input[name="correo"]', 5000);
        browser.waitForVisible('input[name="password"]', 5000);
       // browser.waitForVisible('input[name="idPrograma"]', 5000);
        browser.waitForVisible('input[name="acepta"]', 5000);

        var nombreInput = cajaSignUp.element('input[name="nombre"]');
        nombreInput.click();
        nombreInput.keys(name);

        var apellidoInput = cajaSignUp.element('input[name="apellido"]');
        apellidoInput.click();
        apellidoInput.keys(lastname);

        var correoInput = cajaSignUp.element('input[name="correo"]');
        correoInput.click();
        correoInput.keys(email);

        var passwordInput = cajaSignUp.element('input[name="password"]');
        passwordInput.click();
        passwordInput.keys(password);

        cajaSignUp.element('[type="checkbox"]').click();

        if (accept == 'true') {
            cajaSignUp.element('input[name="acepta"]').click();
        }

        browser.waitForVisible('select[name="idPrograma"]', 5000);
        browser.waitForVisible('option[value="'+programa+'"]', 5000);
        cajaSignUp.element('select[name="idPrograma"]').selectByValue(programa)

    });


    When('I try to register', () => {
        browser.waitForVisible('button=Registrarse', 5000);
        browser.click('button=Registrarse');
    });

    Then(/^I expect (.*)$/, (behavior) => {

        if (behavior.startsWith('E:')) {
            expect(browser.isVisible('.glyphicon-remove')).equal(true);
        }

        if (behavior.startsWith('A:')) {
            var msg = behavior.replace('A:', '');
            var alertText = browser.element('.alert-danger').getText();
            expect(alertText).to.include(msg);
        }

        if (behavior.startsWith('R:')) {
            browser.waitForVisible('.sweet-alert', 5000);
            var alertText = browser.element('.sweet-alert').element('h2').getText();
            expect(alertText).to.include('Ocurrió un error activando tu cuenta');
        }

        if (behavior.startsWith('RF:')) {
            browser.waitForVisible('.sweet-alert', 5000);
            var alertText = browser.element('.sweet-alert').element('h2').getText();
            expect(alertText).to.include('Ocurrió un error activando tu cuenta');
        }

        if (behavior.startsWith('RE:')) {
            browser.waitForVisible('.sweet-alert', 5000);
            var alertText = browser.element('.sweet-alert').element('h2').getText();
            expect(alertText).to.include('Registro exitoso');
        }
    });

});