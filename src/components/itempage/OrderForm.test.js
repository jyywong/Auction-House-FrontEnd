import '@testing-library/jest-dom'
import { render, fireEvent }from '@testing-library/react'
import OrderForm from './OrderForm'

test('Renders correctly', () => {

    const orderDetails = {
        orderType: 'Buy',
        item: 1,
        price: 20,
        quantity: 2
    }

    const orderFormComponent = render(
        <OrderForm
            orderDetails={orderDetails}
        />
    )

    expect(orderFormComponent.container).toHaveTextContent('Buy')
})

test('Activates correct function', () => {
    const mockHandler = jest.fn()

    const orderDetails = {
        orderType: 'Buy',
        item: 1,
        price: 20,
        quantity: 2
    }

    const orderFormComponent = render(
        <OrderForm
            orderDetails={orderDetails}
            setOrderDetails={mockHandler}
        />
    )

    const button = orderFormComponent.getByText('Sell')
    fireEvent.click(button)
    
    expect(mockHandler.mock.calls).toHaveLength(1)
})