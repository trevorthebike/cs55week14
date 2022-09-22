import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'
import { Children } from 'react'

describe('Main', () => {
  it('renders main', () => {
    render(<Home />)
    const main1 = screen.getByRole('link', {
      name: /GitHub Link/i,
    })
    expect(main1).toBeInTheDocument()
  
  })
})

describe('', () => {
  it('renders text', () => {
    render(<Home />)
    const text1 = screen.getByText(/Sorted names with links/i)
    expect(text1).toBeInTheDocument()
  })
})

