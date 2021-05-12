import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import LoggedInDropdown from './LoggedInDropdown'

test('Renders correctly', () => {

    const user = {
        username: 'me'
    }

    const loggedInDropdownComponent = render(
        <MemoryRouter>
            <LoggedInDropdown
                user={user}
            />
        </MemoryRouter>
        
    )
    expect(loggedInDropdownComponent.container).toHaveTextContent('Messages')
})