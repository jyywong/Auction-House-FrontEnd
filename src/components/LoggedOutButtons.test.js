import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import LoggedOutButtons from './LoggedOutButtons'

test('Renders correctly', () => {

    const user = {
        username: 'me'
    }

    const loggedOutButtonsComponent = render(
        <MemoryRouter>
            <LoggedOutButtons/>
        </MemoryRouter>
            
        
    )
    expect(loggedOutButtonsComponent.container).toHaveTextContent('Sign Up')
    expect(loggedOutButtonsComponent.container).toHaveTextContent('Login')
})