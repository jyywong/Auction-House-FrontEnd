import '@testing-library/jest-dom'
import { render, fireEvent }from '@testing-library/react'
import ItemPriceFilter from './ItemPriceFilter'

test('Renders properly', () => {

    const priceFilter = {
        min: 0,
        max: 100
    }

    const itemPriceFilterComponent = render(
        <ItemPriceFilter
            priceFilter={priceFilter}
        />
    )
    expect(itemPriceFilterComponent.container).toHaveTextContent('Max')
    expect(itemPriceFilterComponent.container).toHaveTextContent('Min')
})

test('Input value equal to state value', () => {
    const priceFilter = {
        min: 0,
        max: 100
    }

    const itemPriceFilterComponent = render(
        <ItemPriceFilter
            priceFilter={priceFilter}
        />
    )
    expect(itemPriceFilterComponent.getByTestId('Max')).toHaveValue(100)
})

test('Activates correct function', () => {
    const mockHandler = jest.fn()

    const priceFilter = {
        min: 0,
        max: 100
    }

    const itemPriceFilterComponent = render(
        <ItemPriceFilter
            priceFilter={priceFilter}
            setPriceFilter={mockHandler}
        />
    )

    const input = itemPriceFilterComponent.getByTestId('Min')
    fireEvent.change(input, {
        target: {value: 20}
    })

    expect(mockHandler.mock.calls).toHaveLength(1)
    // expect(mockHandler.mock.calls[0][0].content).toBe(20)
})