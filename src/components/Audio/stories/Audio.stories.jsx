import React from 'react'
import { userEvent, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import { Col } from 'components/Col'
import { Row } from 'components/Row'

import { Audio } from 'components/Audio'

export default {
  title: 'ui-components/Audio',
  component: Audio,
  decorators: [
    (story) => (
      <Row justify-content='center' align-items='center'>
        <Col xs='11' mm='10' md='9' lg='5' hd='4'>
          <Row display='flex' justify-content='center' align-items='center'>
            {story()}
          </Row>
        </Col>
      </Row>
    )
  ]
}

const Template = (args) => <Audio {...args} />

export const Default = Template.bind({})

Default.storyName = 'default'
Default.args = {
  src: 'https://mdn.github.io/learning-area/accessibility/multimedia/viper.mp3',
  format: 'audio/mp3'
}

export const small = Template.bind({})

small.storyName = 'small'
small.args = {
  ...Default.args,
  size: 'small'
}

export const ButtonAudio = Template.bind({})

ButtonAudio.storyName = 'button'
ButtonAudio.args = {
  ...Default.args,
  type: 'Button'
}

export const Interaction = Template.bind({})

Interaction.storyName = 'interaction'
Interaction.args = {
  ...Default.args,
  type: 'Button'
}

Interaction.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const element = canvas.getByRole('button')

  await userEvent.click(element)

  await expect(element).toHaveAttribute('aria-label', 'Pausar')

  await userEvent.click(element)

  await expect(element).toHaveAttribute('aria-label', 'Reproduccir')
}
