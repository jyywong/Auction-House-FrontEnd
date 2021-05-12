import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Navbar from './Navbar'


test('Renders correctly', () => {

    const user = {
        username: 'me'
    }

    const navbarComponent = render(
        <MemoryRouter>
            <Navbar
                user={user}
                isLoggedIn={true}
            />
        </MemoryRouter>
        
    )
    expect(navbarComponent.container).toHaveTextContent('Home')
})