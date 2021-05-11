import '@testing-library/jest-dom'
import { render, fireEvent }from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ItemOrdersTable from './ItemOrdersTable'

test('Renders correctly', () => {

    const orders = [{id:1},{id:2},{id:3}]

    const orderPrice = false

    const itemOrdersTableComponent = render(
        <MemoryRouter>
            <ItemOrdersTable
                orders={orders}
                orderPrice={orderPrice}
            />
        </MemoryRouter>
        
    )
    expect(itemOrdersTableComponent.container).toHaveTextContent('User')
    expect(itemOrdersTableComponent.container).toHaveTextContent('Price')
    expect(itemOrdersTableComponent.container).toHaveTextContent('Reputation')
    expect(itemOrdersTableComponent.container).toHaveTextContent('Quantity')
})

test('Activates correct function', () => {
    const mockHandler = jest.fn()

    const orders = [{id:1},{id:2},{id:3}]

    const orderPrice = false

    const itemOrdersTableComponent = render(
        <MemoryRouter>
            <ItemOrdersTable
                orders={orders}
                orderPrice={orderPrice}
                setOrderPrice={mockHandler}
            />
        </MemoryRouter>
        
    )
    
    const button = itemOrdersTableComponent.getByText('Price')
    fireEvent.click(button)
})