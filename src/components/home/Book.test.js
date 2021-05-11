import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import {BrowserRouter as Router} from 'react-router-dom'
import Book from './Book'

test('Renders book content', () => {
    const testBook = {
        name: 'test',
        description: 'hello',
        author: 'me',
        subject: 'math'
    }

    const bookComponent = render(
        <Router>
            <Book book={testBook} />
        </Router>
    )

    expect (bookComponent.container).toHaveTextContent('test')
    expect (bookComponent.container).toHaveTextContent('hello')
    expect (bookComponent.container).toHaveTextContent('me')
    expect (bookComponent.container).toHaveTextContent('math')
})