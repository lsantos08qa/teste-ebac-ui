///<reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
});

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('carvalhorique@tuamaeaquelaursa.com')
        cy.get('#password').type('teste123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, carvalhorique (não é carvalhorique? Sair)')
    })
    
    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('rique@tuamaeaquelaursa.com')
        cy.get('#password').type('teste123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')
    });

    it('Deve exebir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('carvalhorique@tuamaeaquelaursa.com')
        cy.get('#password').type('teste12345')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail carvalhorique@tuamaeaquelaursa.com está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-error').should('exist')    
    });
})