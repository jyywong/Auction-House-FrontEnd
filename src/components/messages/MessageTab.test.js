import '@testing-library/jest-dom'
import { render, fireEvent }from '@testing-library/react'
import MessageTab from './MessageTab'

test('Renders correctly', () => {

    const currentConvo = {
        id: 1
    }
    const convo = {
        id: 2,
        name: 'hello',
        last_message: {
            created_at: new Date,
            sender_username: 'me',
            message: 'hello this is a message'

        }
    }

    const messageTabComponent = render(
        <MessageTab
            currentConvo={currentConvo}
            convo={convo}
        />
    )

    expect(messageTabComponent.container).toHaveTextContent('hello this is a message')
})

// test('Activates correct function', () => {
//     const mockHandler = jest.fn()

//     const currentConvo = {
//         id: 1
//     }
//     const convo = {
//         id: 2,
//         name: 'hello',
//         last_message: {
//             created_at: new Date,
//             sender_username: 'me',
//             message: 'hello this is a message'

//         }
//     }

//     const messageTabComponent = render(
//         <MessageTab
//             currentConvo={currentConvo}
//             convo={convo}
//         />
//     )
//     const button = messageTabComponent.getByTestId('Tab div')
//     fireEvent.click(button)
    
//     expect(mockHandler.mock.calls).toHaveLength(1)
// })