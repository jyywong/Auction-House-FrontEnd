describe('Tests for the home page', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Can be opened', () => {
        cy.contains('Auction House')
    })
    it('Displays a list of books', () => {
        cy.contains('Jessica Peterson')
        cy.contains('Microeconomics')
        cy.contains('deploy extensible functionalities')
    })
    it('Filters the book list by the search term', () => {
        cy.get('input:first').type('jess')
        cy.contains('Jessica Peterson')
        cy.contains('Microeconomics').should('not.exist')
    })

    it('Does not display books that do not match search term', () => {
        cy.get('input:first').type('nothing should match this')
        cy.get('tbody').children().should('not.exist')
    })
    it('Contains anchor tags', () => {
        cy.contains('a', 'Jessica')
        cy.contains('a', 'Emergency')
        cy.contains('a', 'monetize')

    })
    it('Anchor tags contains correct href link', () => {
        cy.get('a[href*="/item/1"]').should('have.text', 'Jessica Peterson')
        cy.get('a[href*="/item/4"]').should('have.text', 'Microeconomics(10th Edition)')
        cy.get('a[href*="/item/7"]').should('have.text', 'deploy extensible functionalities')
    })
    it('Displays sign up and login buttons when not logged in', () => {
        cy.contains('a', 'Login')
        cy.contains('a', 'Sign Up')
    })
    it('Directs to sign up page when sign up is clicked', () => {
        cy.get('[data-testid="Sign Up"]').click()
        cy.contains('Sign Up')
        cy.url().should('include', '/signup')
    })
    it('Directs to login page when login is clicked', () => {
        cy.get('[data-testid="Login"]').click()
        cy.contains('Login')
        cy.url().should('include', '/login')
    })
    it('Should not crash when home link is clicked', () => {
        cy.get('[data-testid="Home"]').click()
        cy.contains('Auction House')
        cy.url().should('include', '/')
    })
})