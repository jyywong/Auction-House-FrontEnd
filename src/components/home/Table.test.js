import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import {MemoryRouter} from 'react-router-dom'
import Table from './Table'

test('Renders correct column names', () => {

    const books = [
        {
            id: 1
        },
        {
            id:2
        },
        {
            id:3
        }
    ]

    const tableComponent = render(
        <MemoryRouter>
            <Table books={books}/>
        </MemoryRouter>
        
    )

    expect(tableComponent.container).toHaveTextContent('Name')
    expect(tableComponent.container).toHaveTextContent('Description')
    expect(tableComponent.container).toHaveTextContent('Author')
    expect(tableComponent.container).toHaveTextContent('Subject')
})