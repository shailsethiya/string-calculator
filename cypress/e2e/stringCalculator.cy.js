describe('String Calculator UI', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/'); 
    });
  
    it('should return 0 for empty input', () => {
      cy.get('input').clear();
      cy.get('button').click();
      cy.contains('Result: 0');
    });
  });