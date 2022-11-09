import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Accordion, AccordionItem, AccordionButton, AccordionPanel } from 'components/Accordion'

describe('Test in <Accordion/>', () => {
  test('should render correctly', () => {
    render(
      <Accordion>
        <AccordionItem>
          <AccordionButton>title</AccordionButton>
          <AccordionPanel>
            text
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    )

    expect(screen.getByText(/title/)).toBeInTheDocument()
    expect(screen.getByText(/text/)).toBeInTheDocument()
  })

  test('should open the accordion if click the accordion button', async () => {
    render(
      <Accordion>
        <AccordionItem>
          <AccordionButton>title</AccordionButton>
          <AccordionPanel>
            text
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    )

    await userEvent.click(screen.getByText(/title/i))

    expect(screen.getByText(/text/i)).toBeVisible()
  })

  test('should open multiple accordion items', async () => {
    render(
      <Accordion allowMultiple>
        <AccordionItem>
          <AccordionButton>Button 1</AccordionButton>
          <AccordionPanel>
            <p>
              Accordion panel 1.
            </p>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>Button 2</AccordionButton>
          <AccordionPanel>
            <p>
              Accordion panel 2.
            </p>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    )

    await userEvent.click(screen.getByText(/Button 1/i))
    expect(screen.getByText(/Accordion panel 1./i)).toBeVisible()

    await userEvent.click(screen.getByText(/Button 2/i))
    expect(screen.getByText(/Accordion panel 2./i)).toBeVisible()
  })

  test('should have the custom class with it is expanded', async () => {
    render(
      <Accordion>
        <AccordionItem>
          <AccordionButton expanded='u-bg-success-300'>title</AccordionButton>
          <AccordionPanel>
            text
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    )

    const accordionButton = screen.getByText(/title/i)

    await userEvent.click(accordionButton)

    expect(accordionButton).toHaveClass('u-bg-success-300')
  })

  test('should first', () => {
    render(
      <Accordion defaultIndex={1}>
        <AccordionItem>
          <AccordionButton>Button 1</AccordionButton>
          <AccordionPanel>
            <p>
              Accordion panel 1.
            </p>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>Button 2</AccordionButton>
          <AccordionPanel>
            <p>
              Accordion panel 2.
            </p>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    )

    expect(screen.getByText(/Accordion panel 1./i)).not.toBeVisible()
    expect(screen.getByText(/Accordion panel 2./i)).toBeVisible()
  })
})