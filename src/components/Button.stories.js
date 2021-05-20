import React from 'react'
import Button from './Button'

export default {
  title: 'Button',
  component: Button,
}

const Template = args => <Button {...args} />

export const DefaultButton = Template.bind({})
DefaultButton.args = {
  children: 'Button inactive :(',
  isActive: false,
}

export const ActiveButton = Template.bind({})
ActiveButton.args = {
  children: 'Button active :)',
  isActive: true,
}
