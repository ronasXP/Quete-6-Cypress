import { MailSlurp } from "mailslurp-client";

describe('Quete6', () => {
    it('RESET PASSWORD', () => {
      cy.visit('https://preprod.backmarket.fr/fr-fr/password-reset');
      cy.get('[data-qa="accept-cta"]').click();
      cy.get('#email').type('587fe260-e9d3-4a3a-a39d-19298060952a@mailslurp.com');
      cy.get('.MkLAMntR').click();
      cy.mailslurp()
        .then(mailslurp => mailslurp.waitForLatestEmail('587fe260-e9d3-4a3a-a39d-19298060952a',40000, true))
        .then(email => //expect(email.subject).to.contain("My email");
          cy.document().invoke('write', email.body));
          cy.get('.t_pt20px > a').click()
          cy.get('#newPassword').type('Kukubaba321');
          cy.get('#newPasswordConfirmation').type('Kukubaba321');
          cy.get('.MkLAMntR').click();
    });

    it('Login', () => {
      cy.visit('https://preprod.backmarket.fr/fr-fr/register');
      cy.get('[data-qa="accept-cta"]').click();
      cy.get('#signin-email').type('587fe260-e9d3-4a3a-a39d-19298060952a@mailslurp.com');
      cy.get('#signin-password').type('Kukubaba321');
      cy.get('[data-qa="signin-submit-button"]').click();
    });
});
