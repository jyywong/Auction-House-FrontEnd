import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import Table from '../profile/Table'

test('Renders correctly', () => {

    const orders = []
    const tableComponent = render(
        <Table
            orders={orders}
        /> 
    )

    expect(tableComponent.container).toHaveTextContent('Want to')
})