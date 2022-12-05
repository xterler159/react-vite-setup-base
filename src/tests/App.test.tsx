import { render, screen } from '@testing-library/react'

import App from '../App'

describe('Test <App />', () => {
  it('should render App component', () => {
    // const { debug } = render(<App />)
    render(<App />)
    const appTitle = screen.getByTestId("Hello-World-Title")
    expect(appTitle).toBeInTheDocument()
  })

  it('should show error message within vitest ui', () => {
    // const { debug } = render(<App />)
    render(<App />)
    const appTitle = screen.getByTestId("Hello-World-Titl")
    expect(appTitle).toBeInTheDocument()
  })
})