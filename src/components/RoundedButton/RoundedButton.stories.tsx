import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { RoundedButton, RoundedButtonProps } from './RoundedButton'

export default {
  title: 'Components/RoundedButton',
  component: RoundedButton,
} as Meta

const Template: Story<RoundedButtonProps> = (args) => <RoundedButton {...args}>start</RoundedButton>

export const Default = Template.bind({})
Default.args = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleClick(): void {},
}
