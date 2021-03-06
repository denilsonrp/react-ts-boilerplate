import { Story, Meta } from '@storybook/react/types-6-0'

import Heading, { HeadingProps } from './'

export default {
  title: 'Heading',
  component: Heading
} as Meta

const Template: Story<HeadingProps> = (args) => <Heading {...args} />

export const Default = Template.bind({})

Default.args = {
  title: 'React TS Boilerplate'
}
