describe('String Calculator UI', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/'); 
    });
  
    it('should return 0 for empty input', () => {
      cy.get('input').clear();
      cy.get('button').click();
      cy.contains('Result: 0');
    });
  
    it('should return the same number if only one number is provided', () => {
      cy.get('input').clear().type('5');
      cy.get('button').click();
      cy.contains('Result: 5');
    });
  
    it('should return the sum of two comma-separated numbers', () => {
      cy.get('input').clear().type('1,2');
      cy.get('button').click();
      cy.contains('Result: 3');
    });
  });