describe('Покупка аватара', function () {
   it('на покупку нового аватара для тренера', function () {
        cy.visit('https://pokemonbattle.me/');
        cy.get(':nth-child(1) > .auth__input').type('tania1996zzx@gmail.com');
        cy.get('#password').type('69696969_gdE.');
        cy.get('.auth__button').click();
        cy.get('.header__btns > [href="/shop"]').click();
        cy.get(':nth-child(1) > .shop__button').click();
        cy.get('.pay__main-v2').should('be.visible');
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('7384669113632996');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1226');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('147');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Tatiana Horohilova');
        cy.get('.pay-btn').click();
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.get('.payment__adv').click();
    })
})