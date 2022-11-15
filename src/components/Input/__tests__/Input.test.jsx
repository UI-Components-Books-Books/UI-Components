import { screen, render } from '@testing-library/react'

import { Input, InputStyle, InputLeftAddon, InputRightAddon } from 'components/Input'

describe('Test in <Input/>', () => {
  test('should render elements inside correctly', () => {
    render(
      <InputStyle>
        <InputLeftAddon>
          <span>Hello</span>
        </InputLeftAddon>
        <Input />
        <InputRightAddon>
          <span>Test</span>
        </InputRightAddon>
      </InputStyle>
    )

    expect(screen.getByText(/Hello/i)).toBeInTheDocument()
    expect(screen.getByText(/Test/i)).toBeInTheDocument()
  })

  test('should be disabled', () => {
    render(<Input isDisabled />)

    expect(screen.getByRole('textbox', { name: 'Default input label' })).toBeDisabled()
  })

  test('should have custom label', () => {
    const label = 'This is a custom label'

    render(<Input label={label} isLabelVisible />)

    expect(screen.getByRole('textbox', { name: label })).toBeInTheDocument()
  })

  test('should have "aria-readonly" property', () => {
    render(<Input isReadOnly />)

    expect(screen.getByRole('textbox')).toHaveAttribute('aria-readonly', 'true')
  })
})
