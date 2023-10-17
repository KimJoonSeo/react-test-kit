import { logRoles, render, screen } from '@testing-library/react'
import { Skills } from './Skills'

describe('Skills', () => {
  const skills = ['html', 'css', 'javascript']

  test('renders correctly', () => {
    render(<Skills skills={skills} />)
    const listElement = screen.getByRole('list')
    expect(listElement).toBeInTheDocument()
  })

  test('renders a list of skills', () => {
    render(<Skills skills={skills} />)
    const listItemElements = screen.getAllByRole('listitem')
    expect(listItemElements).toHaveLength(skills.length)
  })

  test('renders login button', () => {
    render(<Skills skills={skills} />)
    const loginButton = screen.getByRole('button', { name: 'Login' })
    expect(loginButton).toBeInTheDocument()
  })

  test('start learning button is not rendered', () => {
    render(<Skills skills={skills} />)
    // queryByRole can be used when ensuring that the specific element is not present
    const startLearningButton = screen.queryByRole('button', {
      name: 'Start Learning',
    })
    expect(startLearningButton).not.toBeInTheDocument()
  })
  test('start learning button is eventually displayed', async () => {
    const view = render(<Skills skills={skills} />)
    logRoles(view.container)
    const startLearningButton = await screen.findByRole(
      'button',
      {
        name: 'Start learning',
      },
      {
        timeout: 2000,
      },
    )
    expect(startLearningButton).toBeInTheDocument()
  })
})
