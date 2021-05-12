import '@testing-library/jest-dom'
import { render, fireEvent }from '@testing-library/react'
import ChatBoxMessage from './ChatBoxMessage'

test('Renders correctly', () => {

    const user = {
        id: 2,
    }

    const message = {
        sender: 1,
        sender_username: 'me',
        message: 'hello',
        created_at: new Date

    }

    const chatBoxMessageComponent = render(
        <ChatBoxMessage
            user={user}
            message={message}
        />
    )
    expect(chatBoxMessageComponent.container).toHaveTextContent('hello')
})