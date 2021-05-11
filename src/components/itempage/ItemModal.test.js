import '@testing-library/jest-dom'
import { render} from '@testing-library/react'

import ItemModal from './ItemModal'

test('Renders properly', () => {
    const modalShow = true
    const handleModalClose = false

    const modalOrder = {
        order_owner : 'them',
        buyorsell : 'Buy',
        price : 12,

    }

    const item = {
        name: 'a Book'
    }
    
    const user = {
        id: 1,
        name: 'jon'
    }
    
    const isLoggedIn = true
    
    const itemModalComponent = render(

        <ItemModal
            modalShow={modalShow}
            handleModalClose={handleModalClose}
            modalOrder={modalOrder}
            item={item}
            user={user}
            isLoggedIn={isLoggedIn}
        />
        
    )
    expect(itemModalComponent.container).toHaveTextContent('Send')

    

})