import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import FloatingActionButtion from './FloatingActionButtion'

test('Renders text properly', () => {
    const fabComponent = render(
        <FloatingActionButtion/>
    )
    
    expect(fabComponent.container).toHaveTextContent('Place an order')
})

test('Activates correct function', () => {

    const mockHandler = jest.fn()

    const fabComponent = render(
        <FloatingActionButtion setOrderFormShow={mockHandler}/>
    )
    
    const button = fabComponent.getByText('Place an order')
    fireEvent.click(button)
    
    expect(mockHandler.mock.calls).toHaveLength(1)

})