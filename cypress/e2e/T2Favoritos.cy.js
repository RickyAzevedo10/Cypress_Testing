describe('TC2 - Favoritos', () => {
    it('Adicionar um clube aos favoritos', () => {
        cy.visit('https://www.flashscore.pt/#');

        cy.get('#onetrust-accept-btn-handler').contains('Aceito').click();
    
        //Seleciona o botão de pesquisa
        cy.get('#search-window').click();
        
        //Introduzir o valor no campo de pesquisa
        cy.get('.searchInput__input').type('Porto');

        // Selecionar a primeira opção da lista
        cy.get('.searchResult').first().click();
        
        //Adicionar a equipa aos favoritos
        cy.get('#heading__starElement').click();

        //Validar se existe o texto
        cy.get('div[title="Remover das Minhas Equipas!"]').should('be.visible');
    });

    it('Fluxo alternativo para adicionar um clube aos favoritos', () => {
        cy.visit('https://www.flashscore.pt/#');

        cy.get('#onetrust-accept-btn-handler').contains('Aceito').click()
    
        //Seleciona o botão de pesquisa
        cy.get('#search-window').click()
        
        //Introduzir o valor no campo de pesquisa
        cy.get('.searchInput__input').type('Porto');

        // Selecionar a primeira opção da lista
        cy.get('.searchResult').eq(1).click();
        
        //Adicionar a equipa aos favoritos
        cy.get('#heading__starElement').click();

        //Validar se existe o texto
        cy.get('div[title="Remover das Minhas Equipas!"]').should('be.visible');
    });

    it('Remover um clube dos favoritos', () => {
        cy.visit('https://www.flashscore.pt/#');

        cy.get('#onetrust-accept-btn-handler').contains('Aceito').click();
    
        //Seleciona o botão de pesquisa
        cy.get('#search-window').click();
        
        //Introduzir o valor no campo de pesquisa
        cy.get('.searchInput__input').type('Porto');

        // Selecionar a primeira opção da lista
        cy.get('.searchResult').first().click();
        
        //Adicionar a equipa aos favoritos
        cy.get('#heading__starElement').click();

        cy.wait(1000)
        
        //Remover a equipa aos favoritos
        cy.get('#heading__starElement').click();

        //Validar se existe o texto
        cy.get('div[title="Adiconar às Minhas Equipas!"]').should('be.visible');
    });

    it('Fluxo alternativo para remover um clube dos favoritos', () => {
        cy.visit('https://www.flashscore.pt/#');

        cy.get('#onetrust-accept-btn-handler').contains('Aceito').click()
    
        //Seleciona o botão de pesquisa
        cy.get('#search-window').click()
        
        //Introduzir o valor no campo de pesquisa
        cy.get('.searchInput__input').type('exemplosemresultado');

        //Apresenta mensagem 
        cy.get('.searchResults__noResult').contains('Não foram encontrados resultados.').should('be.visible');
    });
  });
  