describe('Logged out profile page tests', () => {
    beforeEach(() => {
        cy.visit('/user/1')
    })
    it('Can be opened', () => {
        cy.contains('jon')
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
    it('Displays a list of orders', () => {
        cy.get('tbody').children().should('exist')
    })
    it('Displays two tables', () => {
        cy.get('[data-testid="Profile Table"]').should('have.length', 2)
    })
    it('Filters the order list by the search term', () => {
        cy.get('input:first').type('jess')
        cy.contains('Jessica Peterson')
        cy.contains('Microeconomics').should('not.exist')
    })
    it('Does not display books that do not match search term', () => {
        cy.get('input:first').type('nothing should match this')
        cy.get('tbody').children().should('not.exist')
    })
    it('Should not contain any buttons', () => {
        cy.get('[data-testid="Profile Table"]').find('button').should('not.exist')
    })
    it('Should order prices when price header is clicked')
})

describe('Logged in profile page tests and profile belongs to user', () => {
    beforeEach(() => {
        cy.visit('/user/3')
        cy.get('[data-testid="Login"]').click()
        cy.get('[data-testid="Username"]').type('testuser2')
        cy.get('[data-testid="Password"]').type('testpassword')
        cy.get('[data-testid="Log in"]').click()
        cy.wait(200)
        cy.visit('/user/3')
    })
    it('Displays username in navbar when logged in', () => {
        cy.contains('testuser2')
    })
    
    it('Displays dropdown in navbar when logged in', () => {
        cy.get('[data-testid="Dropdown"]').click()
        cy.contains('My Profile')
        cy.contains('Messages')
        cy.contains('Logout')
    })

    it('Goes to correct profile page when "My Profile" is clicked', () => {
        cy.get('[data-testid="Dropdown"]').click()
        cy.get('[data-testid="My Profile"]').click()
        cy.contains('testuser2')
        cy.url().should('include', '/user/3')
    })

    it('Goes to correct messages page when "Messages" is clicked', () => {
        cy.get('[data-testid="Dropdown"]').click()
        cy.get('[data-testid="Messages"]').click()
        cy.contains('My Messages')
        cy.url().should('include', '/messages')
    })

    it('Logs out when "Logout" is clicked', () => {
        cy.get('[data-testid="Dropdown"]').click()
        cy.get('[data-testid="Logout"]').click()
        cy.contains('testuser2').should('not.exist')
        cy.contains('Sign Up')
        cy.contains('Login')
    })

    it('Shows "Bought/Sold", Edit, and Delete buttons', () => {
        cy.get('[data-testid="BorS Button"]')
        cy.get('[data-testid="Edit Button"]')
        cy.get('[data-testid="Delete Button"]')
    })

    it('Removes appropriate item when edit is clicked (WIP)')
    it('Opens edit modal when edit button is clicked', () => {
        cy.get('[data-testid="Edit Button"]:first').click()
        cy.get('[data-testid="Edit Modal"]')
    })
    // it('Displays the correct information in the edit modal', () => {
    //     cy.get('[data-testid="Book Name"]:first').then((xBookName) => {
    //         const bookName = xBookName.text()
    //         cy.get('[data-testid="Order Price"]:first').then((xOrderPrice) => {
    //             const orderPrice = xOrderPrice.integer()
    //             cy.get('[data-testid="Order Quantity"]:first').then((xOrderQuantity) => {
    //                 const orderQuantity = xOrderQuantity.text()
    //                 cy.get('[data-testid="Edit Button"]:first').click()

    //                 cy.get('[data-testid="Edit Modal Price"]').contains(orderPrice)
    //                 cy.get('[data-testid="Edit Modal Quantity"]').contains(orderQuantity)
    //             })
    //         })
    //     })
    // })
})