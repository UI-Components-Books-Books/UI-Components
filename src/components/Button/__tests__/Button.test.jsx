import { Button } from 'components/Button'
import { render, screen } from '@testing-library/react'

describe('Test in <Button/>', () => {
  test('should render correctly', () => {
    render(<Button />)

    expect(screen.getByRole('button', { name: 'Button' })).toBeInTheDocument()
  })
})
