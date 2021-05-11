import '@testing-library/jest-dom'
import { render}from '@testing-library/react'
import ItemHeader from './ItemHeader'

test('Renders correctly', () => {
    const item = {
        name: 'hello',
        author: 'me',
        description: 'description',
        classes: 'math',
        subjectS: 'math'
    }

    const itemHeaderComponent = render(
        <ItemHeader item={item} />
    )

    expect(itemHeaderComponent.container).toHaveTextContent('Description')
    expect(itemHeaderComponent.container).toHaveTextContent('Classes')
    expect(itemHeaderComponent.container).toHaveTextContent('Subjects')
})