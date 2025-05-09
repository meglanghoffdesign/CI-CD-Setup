describe('Quiz', () => {
  it('renders the site correctly', () => {
    cy.intercept('GET', '/api/questions/random').as('getQuestion');
    
    // Visit the site and ensure the "Start Quiz" button is visible
    cy.visit('/');
    cy.contains('Start Quiz').should('be.visible');
  });
});