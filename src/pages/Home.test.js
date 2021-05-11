
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Home from './Home'
import SearchBar from '../components/home/SearchBar'

test('Renders content', () => {
  
    const homeComponent = render(
        <Home />
    )
    expect(homeComponent.container).toBeDefined()
})