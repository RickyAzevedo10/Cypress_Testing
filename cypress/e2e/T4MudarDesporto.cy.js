describe('TC1 - Mudar Desporto', () => {
  it('Mudar para a modalidade de Tenis', () => {
      cy.visit('https://www.flashscore.pt/#');
      
      // Clicar no botao para mudar de modalidade
      cy.get('a[data-sport-id="2"] .menuTop__icon').click();

      cy.wait(2000)

      // Verificar se a modalidade esta ativa
      cy.get('a[data-sport-id="2"]').should('have.class', 'menuTop__item--active');
  });
});