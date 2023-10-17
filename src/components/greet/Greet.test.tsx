import { render, screen } from '@testing-library/react'
import { Greet } from './Greet'
describe('Greet', () => {
  test('renders correctly', () => {
    render(<Greet />)
    const textElement = screen.getByText(/Hello Guest/)
    expect(textElement).toBeInTheDocument()
  })
  test('renders correctly with name property', () => {
    render(<Greet name={'vishow'} />)
    const textElement = screen.getByText(/Hello vishow/)
    expect(textElement).toBeInTheDocument()
  })
})
