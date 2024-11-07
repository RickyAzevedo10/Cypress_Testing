describe('TC5 - Logout', () => {
    beforeEach(() => {
        // Realizar o login aqui para garantir que o usuário está logado antes dos testes de logout
        cy.visit('https://www.flashscore.pt/#');
        cy.get('#onetrust-accept-btn-handler').contains('Aceito').click();
        cy.get('#user-menu').click();
        cy.get('#header__block--user-menu').contains('Entrar com email').click();
        cy.get('#email').type('grupo1QTSMEI@gmail.com');
        cy.get('#passwd').type('grupo1QSTMEI_');
        cy.get('.ui-button.ui-formButton.greenPrimary.lsidDialog__button').click();

        cy.wait(5000)
    });

    it('Tentativa de terminar sessão, mas sem sucesso', () => {
        cy.viewport(1920, 1080);
    
        // Selecionar o botão com a conta logada
        cy.get('#user-menu').click();

        //Selecionar a opção de logout do menu
        cy.get('#lsid-sign-out').contains('Logout').click();

        cy.wait(5000);

        //Selecionar a opção "Nao" na modal
        cy.get('.lsidDialog__form button.ui-button.ui-formButton.greenPrimary.lsidDialog__button:contains("Não")').click();

        //Validar que o utilizador ainda se encontra logado
        cy.get('#user-menu').contains('grupo1QTSMEI@gmail.com').should('be.visible');
    });
    
    it('Terminar Sessão e ser redirecionado para a página principal', () => {
        cy.viewport(1920, 1080);

        // Selecionar o botão com a conta logada
        cy.get('#user-menu').click();

        //Selecionar a opção de logout do menu
        cy.get('#lsid-sign-out').contains('Logout').click();

        //Selecionar a opção "Sim" na modal
        cy.get('.lsidDialog__form button.ui-button.ui-formButton.greenSecondary.lsidDialog__button:contains("Sim")').click();

        //Validar que a opção de login esta disponivel novamente
        cy.get('#user-menu').contains('LOGIN').should('be.visible');
    });
  });
  