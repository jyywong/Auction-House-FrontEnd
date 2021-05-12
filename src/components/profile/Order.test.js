import '@testing-library/jest-dom'
import { render, fireEvent} from '@testing-library/react'
import Order from './Order'

test('Renders correctly', () => {

    const order = { 
        book_name: 'hello',
        price: 12,
        quantity: 1,
        buyorsell: 'Buy'
    }
    const orderComponent = render(
        <Order
            order={order}
        /> 
    )

    expect(orderComponent.container).toHaveTextContent('hello')
})

test('Activates correct function', () => {
    const mockHandler = jest.fn()

    const order = { 
        book_name: 'hello',
        price: 12,
        quantity: 1,
        buyorsell: 'Buy'
    }
    const orderComponent = render(
        <Order
            isUsersProfile={true}
            order={order}
            setShowEditModal={mockHandler}
            setCurrentOrder={mockHandler}
        /> 
    )

    const button = orderComponent.getByText('Edit')
    fireEvent.click(button)
    
    expect(mockHandler.mock.calls).toHaveLength(2)
})