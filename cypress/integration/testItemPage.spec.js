describe('Logged out item page tests', () => {
    beforeEach(() => {
        cy.visit('/item/1')
    })
    it('Can be opened', () => {
        cy.contains('Jessica Peterson')
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
    it('Displays book info correctly', () => {
        cy.contains('Description')
        cy.contains("This is a book")
        cy.contains('Classes')
        cy.contains('Subjects')
    })
    it('Displays a list of orders', () => {
        cy.get('tbody').children().should('exist')
    })
    it('Displays orders correctly', () => {
        cy.contains('tbody>tr', /.+/)
    })
    it('Default page is orders', () => {
        cy.get('[data-testid="Orders"]').contains('Orders')
        cy.get('[data-testid="Orders"]').should('have.attr', 'style', 'cursor: pointer; border-bottom-style: solid;')
        cy.get('[data-testid="Statistics"]').should('not.have.attr', 'style', 'cursor: pointer; border-bottom-style: solid;')
    })
    it('Shows graph when statistics is clicked', () => {
        cy.get('[data-testid="Statistics"]').click()
        cy.get('[data-testid="Statistics"]').should('have.attr', 'style', 'cursor: pointer; border-bottom-style: solid;')
        cy.get('canvas')
        cy.get('table').should('not.exist')
    })
    it('Shows buying orders when "Buyers" is clicked', () => {
        cy.get('[data-testid="Buyers"]').click()
        cy.get('[data-testid="Buyers"]').should('have.attr', 'class', 'btn btn-primary')
        cy.contains('Buying')
    })
    it('Shows selling orders when "Sellers" is clicked', () => {
        cy.get('[data-testid="Buyers"]').click()
        cy.get('[data-testid="Sellers"]').click()
        cy.get('[data-testid="Sellers"]').should('have.attr', 'class', 'btn btn-success')
        cy.contains('Selling')
    })

    // it('Does not show orders that are less than the minimum price filter', () => {
    //     cy.get('[data-testid="Min"]').type('12')
    //     cy.get('[data-testid="Price"]').should('have.attr', 'data-test-value').should('not.be.lt', '12')
    // })

    it('Displays message modal when order button is clicked', () => {
        cy.get('[data-testid="Order Button"]:first').click()
        cy.get('[data-testid="Message Modal"]')
    })
    it('Displays the correct information in the message modal', () => {
        cy.get('[data-testid="User"]:first').then((xuser) => {
            const user = xuser.text()
            cy.get('[data-testid="Price"]:first').then((xprice) => {
                const price = xprice.text()
                cy.get('[data-testid="Item name"]'), (xitem) => {
                    const itemName = xitem.text()
                    cy.get('[data-testid="Order Button"]:first').click()
                    cy.get('[data-testid="Message Modal Title"]').contains(`Send a message to ${user}`)
                    cy.get('[data-testid="Message Modal Text"]').contains(`Hi ${user}, I'd like to buy your ${itemName} for ${price}.`)
                }
            })
        })

    })
    it('Directs to appropriate profile page when user is clicked', () => {
        cy.get('[data-testid="User link"]:first').then((xuser) => {
            const username = xuser.text()
            cy.get('[data-testid="User link"]:first').click()
            cy.contains(username)
            cy.url().should('include', '/user/')
        })
    })
    

})

describe('Logged in item page tests', () => {
    beforeEach(() => {
        cy.visit('/item/1')
        cy.get('[data-testid="Login"]').click()
        cy.get('[data-testid="Username"]').type('testuser2')
        cy.get('[data-testid="Password"]').type('testpassword')
        cy.get('[data-testid="Log in"]').click()
        cy.wait(200)
        cy.visit('/item/1')
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

    it('Shows floating action button when logged in', () => {
        cy.get('[data-testid="FAB"]')
    })
    it('Shows order modal when FAB is clicked', () => {
        cy.get('[data-testid="FAB"]').click()
        cy.get('[data-testid="Order Modal"]')
    })
    it('Shows right book name initially in the modal order form', () => {
        cy.get('[data-testid="Item name"]').then((xitem) => {
            const itemName = xitem.text()
            cy.get('[data-testid="FAB"]').click()
            cy.get('[data-testid="Order Modal"]').contains(itemName)
        })
       
    })
})


