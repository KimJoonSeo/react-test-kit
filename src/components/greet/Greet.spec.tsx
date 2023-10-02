import { render, screen } from '@testing-library/react'
import {Greet} from './Greet';
describe('Greet', () => {
    xit('renders correctly', () => {
        render(<Greet />);
        const textElement = screen.getByText('Hello Guest')
        expect(textElement).toBeInTheDocument()
    })
    it('renders a name', () => {
        render(<Greet name="Vishwas" />)
        const textElement = screen.getByText('Hello Vishwas')
        expect(textElement).toBeInTheDocument()
    })
})