describe('TC3 - Pesquisa Clube', () => {
    it('Pesquisa por um clube, mas sem resultados apresentados', () => {
        cy.visit('https://www.flashscore.pt/#');

        cy.get('#onetrust-accept-btn-handler').contains('Aceito').click()
    
        //Seleciona o botão de pesquisa
        cy.get('#search-window').click()
        
        //Introduzir o valor no campo de pesquisa
        cy.get('.searchInput__input').type('exemplosemresultado');

        //Apresenta mensagem 
        cy.get('.searchResults__noResult').contains('Não foram encontrados resultados.').should('be.visible');
    });

    it('Pesquisa por um determinado clube com sucesso', () => {
        cy.visit('https://www.flashscore.pt/#');

        cy.get('#onetrust-accept-btn-handler').contains('Aceito').click()
    
        //Seleciona o botão de pesquisa
        cy.get('#search-window').click()
        
        //Introduzir o valor no campo de pesquisa
        cy.get('.searchInput__input').type('Porto');

        // Selecionar a primeira opção da lista
        cy.get('.searchResult').first().click();
        
        //Valida o nome da equipa
        cy.get('.heading__name').contains('FC Porto').should('be.visible');
    });
  });
  