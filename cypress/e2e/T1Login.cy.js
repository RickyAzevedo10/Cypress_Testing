describe('TC1 - Login', () => {
    it('Mensagem de erro ao iniciar sessão com um e-mail e password incorreto', () => {
        cy.visit('https://www.flashscore.pt/#');
    
        cy.get('#onetrust-accept-btn-handler').contains('Aceito').click()
        
        //selecionar o botão do Login e de seguida na opção por email
        cy.get('#user-menu').click();
        cy.get('#header__block--user-menu').contains('Entrar com email').click();

        //Introduzir os valores da palavra pass e email
        cy.get('#email').type('grupo1QTSMEIgmail.com');
        cy.get('#passwd').type('grupo1QSTMEI_10');

        //Apresenta uma mensagem de erro relativa ao e-mail
        cy.get('.lsidDialog__validation').contains('O e-mail deve estar de forma válida (e.g. nome@exemplo.com).').should('be.visible');
    });

    it('Mensagem de erro ao iniciar sessão com uma palavra-passe incorreta', () => {
        cy.visit('https://www.flashscore.pt/#');
    
        cy.get('#onetrust-accept-btn-handler').contains('Aceito').click()
        
        //selecionar o botão do Login e de seguida na opção por email
        cy.get('#user-menu').click();
        cy.get('#header__block--user-menu').contains('Entrar com email').click();

        //Introduzir os valores da palavra pass e email
        cy.get('#email').type('grupo1QTSMEI@gmail.com');
        cy.get('#passwd').type('grupo1QSTMEI_10');

        cy.get('.ui-button.ui-formButton.greenPrimary.lsidDialog__button').click();

        //Efetuo um wait para que o erro seja apresentado
        cy.wait(3000)

        //Apresenta a mensagem de erro
        cy.get('.lsidDialog__validation').contains('O utilizador ou palavra passe não existem.').should('be.visible');
    });

    it('Redirecionamento para a página inicial após login com sucesso', () => {
        cy.visit('https://www.flashscore.pt/#');
        //Ajustar tamanho da janela
        cy.viewport(1920, 1080);
    
        cy.get('#onetrust-accept-btn-handler').contains('Aceito').click()
        
        //selecionar o botão do Login e de seguida na opção por email
        cy.get('#user-menu').click();
        cy.get('#header__block--user-menu').contains('Entrar com email').click();

        //Introduzir os valores da palavra pass e email
        cy.get('#email').type('grupo1QTSMEI@gmail.com');
        cy.get('#passwd').type('grupo1QSTMEI_');

        cy.get('.ui-button.ui-formButton.greenPrimary.lsidDialog__button').click();

        //Validar que o utilizador encontra-se logado
        cy.get('#user-menu').contains('grupo1QTSMEI@gmail.com').should('be.visible');
    });
  });
  