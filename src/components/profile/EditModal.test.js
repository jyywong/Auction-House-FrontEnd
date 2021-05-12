import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import EditModal from './EditModal'

test('Renders correctly', () => {

    const order = {
        buyorsell: 'Buy',
        book_name: 'A book',
        price: 12.00
    }


    const editModalComponent = render(
        <EditModal
            showEditModal={true}
            order={order}
        />
    )
    editModalComponent.debug()
    expect(editModalComponent.container).toHaveTextContent('Quantity')
})