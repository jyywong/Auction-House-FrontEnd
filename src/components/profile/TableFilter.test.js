import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import TableFilter from './TableFilter'

test('Renders correctly', () => {


    const tableFilterComponent = render(
        <TableFilter
        /> 
    )

    expect(tableFilterComponent.container).toHaveTextContent('Search order by book name')
})

test('Activates correct function', () => {
    const mockHandler = jest.fn()

    const tableFilterComponent = render(
        <TableFilter
            setBookSearch={mockHandler}
        /> 
    )
    const input = tableFilterComponent.getByTestId('Search')
    fireEvent.change(input, {
        target: {value: 'hello'}
    })

    expect(mockHandler.mock.calls).toHaveLength(1)
})