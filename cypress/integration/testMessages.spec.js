describe('Messages page test', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('[data-testid="Login"]').click()
        cy.get('[data-testid="Username"]').type('testuser2')
        cy.get('[data-testid="Password"]').type('testpassword')
        cy.get('[data-testid="Log in"]').click()
        cy.wait(200)
        cy.get('[data-testid="Dropdown"]').click()
        cy.get('[data-testid="Messages"]').click()
    })
    it('Can be opened', () => {
        cy.contains('My Messages')
        cy.url().should('include', '/messages')
    })
    it('Shows message tabs', () => {
        cy.get('[data-testid="Tab div"]')
    })
    it('Shows chatbox and shortens message tabs when tab is clicked', () => {
        cy.get('[data-testid="Tab div"]:first').click()
        cy.get('[data-testid="Tab List"]').should('have.attr', 'class', 'col-4 overflow-auto')
    })
    it('Closes chatbox when the back button is clicked', () => {
        cy.get('[data-testid="Tab div"]:first').click()
        cy.get('[data-testid="Tab List"]').should('have.attr', 'class', 'col-4 overflow-auto')
        cy.get('[data-testid="Back Button"]:first').click()
        cy.get('[data-testid="Tab List"]').should('have.attr', 'class', 'col overflow-auto')
    })
})