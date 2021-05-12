import '@testing-library/jest-dom'
import { render, fireEvent }from '@testing-library/react'
import ChatBox from './ChatBox'

test('Renders properly', () => {

    window.HTMLElement.prototype.scrollIntoView = () => {}

    const user = {
        id:1,
        username: 'jon'
    }
    const conversation = [{
        
            id:1,
            message: 'hello'
        
    }]

    const currentConvo = {
        id:1
    }

    const chatBoxComponent = render(
        <ChatBox
            user={user}
            conversation={conversation}
            currentConvo={currentConvo}
        />
    )
    expect(chatBoxComponent.container).toHaveTextContent('Back')
})

test('Activates correct function', () => {
    window.HTMLElement.prototype.scrollIntoView = () => {}

    const mockHandler = jest.fn()
    const user = {
        id:1,
        username: 'jon'
    }
    const conversation = [{
        
            id:1,
            message: 'hello'
        
    }]

    const currentConvo = {
        id:1
    }

    const chatBoxComponent = render(
        <ChatBox
            user={user}
            conversation={conversation}
            currentConvo={currentConvo}
            setNewMessage={mockHandler}
        />
    )
    const input = chatBoxComponent.getByTestId('newChat')
    fireEvent.change(input, {
        target: {value: 'hello'}
    })
    expect(mockHandler.mock.calls).toHaveLength(1)
})