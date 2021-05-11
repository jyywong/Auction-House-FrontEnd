import '@testing-library/jest-dom'
import { render, fireEvent }from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ItemOrder from './ItemOrder'

test('Renders properly', () => {
    const order = {
        order_owner : 'them',
        buyorsell : 'Buy',
        price : 12,

    }

    const itemOrderComponent = render(
        <MemoryRouter>
        <ItemOrder
            order={order}
            handleModalShow={false}
        /> 

        </MemoryRouter>
       
    )

    expect(itemOrderComponent.container).toHaveTextContent('Great')
})

test('Activates correct function', () => {

    const order = {
        order_owner : 'them',
        buyorsell : 'Buy',
        price : 12,

    }
    const mockHandler = jest.fn()

    const itemOrderComponent = render(
        <MemoryRouter>
        <ItemOrder
            order={order}
            handleModalShow={mockHandler}
            setModalOrder={mockHandler}
        /> 

        </MemoryRouter>
       
    )
    
    const button = itemOrderComponent.getByText('Sell')
    fireEvent.click(button)

    expect(mockHandler.mock.calls).toHaveLength(2)
})