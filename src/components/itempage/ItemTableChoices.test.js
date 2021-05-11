import '@testing-library/jest-dom'
import { render, fireEvent }from '@testing-library/react'
import ItemTableChoices from './ItemTableChoices'

test('Renders correctly', () => {
    const priceFilter = {
        max:0,
        min:0
    }

    const pageFunction = 'orders'

    const itemTableChoicesComponent = render(
        <ItemTableChoices 
            pageFunction={pageFunction}
            priceFilter={priceFilter}
        />
    )
    expect(itemTableChoicesComponent.container).toHaveTextContent('Orders')
    expect(itemTableChoicesComponent.container).toHaveTextContent('Statistics')

})

test('Activates correct function', () => {
    const mockHandler = jest.fn()

    const priceFilter = {
        max:0,
        min:0
    }

    const pageFunction = 'orders'

    const itemTableChoicesComponent = render(
        <ItemTableChoices 
            pageFunction={pageFunction}
            priceFilter={priceFilter}
            setPageFunction={mockHandler}
        />
    )

    const button = itemTableChoicesComponent.getByText('Statistics')
    fireEvent.click(button)

    expect(mockHandler.mock.calls).toHaveLength(1)
})