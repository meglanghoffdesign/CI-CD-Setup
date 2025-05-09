describe('Quiz', () => {
  it('renders the site correctly', () => {
    cy.intercept('GET', '/api/questions/random').as('getQuestion');
    
    // Visit the site and ensure the "Start Quiz" button is visible
    cy.visit('/');
    cy.contains('Start Quiz').should('be.visible');
  });
  
it('answers all 10 questions and completes the quiz', () => {
  cy.intercept('GET', '/api/questions/random').as('getQuestion');
  
  cy.visit('/');
  cy.contains('Start Quiz').click();
  cy.wait('@getQuestion', { timeout: 10000 });

  // Answer 10 questions
  for (let i = 0; i < 10; i++) {
    cy.get('[data-cy="question"]', { timeout: 10000 }).should('be.visible');
    cy.get(`[data-cy="answer-${i % 3}"]`).click();
    
    // Wait for the next question
    cy.wait('@getQuestion', { timeout: 10000 });
  }

  cy.contains('Quiz Completed').should('be.visible');
  cy.contains('Your score:').should('be.visible');
});

  it('answers a question correctly and moves to the next', () => {
    cy.intercept('GET', '/api/questions/random').as('getQuestion');
  
    cy.visit('/');
  
    // Start the quiz
    cy.contains('Start Quiz').click();
    cy.wait('@getQuestion', { timeout: 10000 });
  
    // Check for the first question
    cy.get('[data-cy="question"]', { timeout: 10000 }).should('be.visible');
  
    // Click the first answer (assuming it's correct)
    cy.get('[data-cy="answer-0"]').click();
  
    // Check if the next question appears
    cy.get('[data-cy="question"]', { timeout: 10000 }).should('be.visible');
  });
  
  it('answers all 10 questions and completes the quiz', () => {
    cy.intercept('GET', '/api/questions/random').as('getQuestion');
  
    cy.visit('/');
  
    // Start the quiz
    cy.contains('Start Quiz').click();
    cy.wait('@getQuestion', { timeout: 10000 });
  
    // Loop through answering all 10 questions
    for (let i = 0; i < 10; i++) {
      cy.get('[data-cy="question"]', { timeout: 10000 }).should('be.visible');
      cy.get(`[data-cy="answer-${i % 3}"]`).click();  // Assuming 3 answers, and randomly clicking one
    }
  
    // Ensure the quiz completion message appears
    cy.contains('Quiz Completed').should('be.visible');
  
    // Check if the score is displayed
    cy.contains('Your score:').should('be.visible');
  });
  
  it('starts a new quiz after completing the first one', () => {
    cy.intercept('GET', '/api/questions/random').as('getQuestion');
    
    cy.visit('/');
    
    // Start the quiz
    cy.contains('Start Quiz').click();
    cy.wait('@getQuestion', { timeout: 10000 });
    
    // Answer all 10 questions
    for (let i = 0; i < 10; i++) {
      cy.get('[data-cy="question"]', { timeout: 10000 }).should('be.visible');
      cy.get(`[data-cy="answer-${i % 3}"]`).click();
    }
    
    // Ensure quiz completion message appears
    cy.contains('Quiz Completed').should('be.visible');
    
    // Click 'Take New Quiz'
    cy.contains('Take New Quiz').click();
    
    // Ensure that the first question appears after restart (no Start Quiz button)
    cy.get('[data-cy="question"]', { timeout: 10000 }).should('be.visible'); 
    cy.contains('Start Quiz').should('not.exist'); 
  });
});