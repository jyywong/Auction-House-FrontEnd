import '@testing-library/jest-dom'
import { render, fireEvent }from '@testing-library/react'
import OrderFormModal from './OrderFormModal'

test('Renders correctly', () => {

    const isLoggedIn = true
    const item = {
        id: 1,
        name: 'hello'
    }

    const orderFormModalComponent = render(
        <OrderFormModal 
            orderFormShow={true}
            isLoggedIn={isLoggedIn}
            item = {item}
        />
    )
    expect(orderFormModalComponent.container).toHaveTextContent('hello')
})

test('Activates correct function', () => {
    const mockHandler = jest.fn()

    const isLoggedIn = true
    const item = {
        id: 1,
        name: 'hello'
    }

    const orderFormModalComponent = render(
        <OrderFormModal 
            setOrderFormShow={mockHandler}
            orderFormShow={true}
            isLoggedIn={isLoggedIn}
            item = {item}
        />
    )

    const button = orderFormModalComponent.getByText('Post')
    fireEvent.click(button)

    expect(mockHandler.mock.calls).toHaveLength(1)
})