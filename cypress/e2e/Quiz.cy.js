describe('Quiz', () => {
  it('renders the site correctly', () => {
    cy.intercept('GET', '/api/questions/random').as('getQuestion');
    
    // Visit the site and ensure the "Start Quiz" button is visible
    cy.visit('/');
    cy.contains('Start Quiz').should('be.visible');
  });

  it('answers a question correctly and moves to the next', () => {
    cy.intercept('GET', '/api/questions/random').as('getQuestion');
    
    cy.visit('/');
    
    // Start the quiz
    cy.contains('Start Quiz').click();
    cy.wait('@getQuestion', { timeout: 10000 });

    // Check for the first question
    cy.get('.card h2', { timeout: 10000 }).should('be.visible');
    
    // Click the first answer (assuming it's correct)
    cy.get('.btn-primary').first().click();
    
    // Check if the next question appears
    cy.get('.card h2', { timeout: 10000 }).should('be.visible');
  });

  it('starts a new quiz after completing the first one', () => {
    cy.intercept('GET', '/api/questions/random').as('getQuestion');
    
    cy.visit('/');
    
    // Start the quiz
    cy.contains('Start Quiz').click();
    cy.wait('@getQuestion', { timeout: 10000 });
    
    // Answer all 10 questions
    for (let i = 0; i < 10; i++) {
      cy.get('.card h2', { timeout: 10000 }).should('be.visible');
      cy.get('.btn-primary').first().click();
    }
    
    // Ensure quiz completion message appears
    cy.contains('Quiz Completed').should('be.visible');
    
    // Click 'Take New Quiz'
    cy.contains('Take New Quiz').click();
    
    // Ensure that the first question appears after restart (no Start Quiz button)
    cy.get('.card h2', { timeout: 10000 }).should('be.visible'); 
    cy.contains('Start Quiz').should('not.exist'); 
  });
});