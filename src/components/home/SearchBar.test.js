import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import SearchBar from './SearchBar'

test('Renders search bar', () => {
    const searchBarComponent = render(
        <SearchBar />
    )
        
    expect(searchBarComponent.container).toHaveTextContent('Auction House')
    
})

test('Input value is equal to state value', () => {
    const searchBarComponent = render(
        <SearchBar search={'hello'}/>
    )

    expect(searchBarComponent.getByTestId('search')).toHaveValue('hello')
})