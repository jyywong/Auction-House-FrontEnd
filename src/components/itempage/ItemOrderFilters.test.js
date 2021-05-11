import '@testing-library/jest-dom'
import { render, fireEvent }from '@testing-library/react'
import ItemOrderFilters from './ItemOrderFilters'

test('Renders correctly', () => {

    const orderType = 'Buy'
    const priceFilter = false



    const itemOrdersFiltersComponent = render(
        <ItemOrderFilters 
            orderType={orderType}
            priceFilter={priceFilter}
        />
    )

    expect(itemOrdersFiltersComponent.container).toHaveTextContent('Buyers')
})

test('Activates correct function', () => {
    const mockHandler = jest.fn()

    const orderType = 'Buy'
    const priceFilter = false



    const itemOrdersFiltersComponent = render(
        <ItemOrderFilters 
            orderType={orderType}
            priceFilter={priceFilter}
            setOrderType={mockHandler}
        />
    )
    
    const button = itemOrdersFiltersComponent.getByText('Buyers')
    fireEvent.click(button)
    
    expect(mockHandler.mock.calls).toHaveLength(1)

})