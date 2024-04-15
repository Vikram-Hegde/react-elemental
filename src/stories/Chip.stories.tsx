import { Meta, StoryFn } from '@storybook/react'
import { Chip } from '../../lib'
import CheckIcon from '~icons/solar/check-circle-linear'

const meta: Meta<typeof Chip> = {
	tags: ['autodocs'],
	component: Chip,
}

export default meta

const Template: StoryFn<typeof Chip> = (args) => <Chip {...args} />

export const Default = Template.bind({})
Default.args = {
	accent: 'blue',
	children: 'Chip',
}

export const WithIcon = Template.bind({})
WithIcon.args = {
	accent: 'blue',
	children: 'Chip',
	icon: <span>🚀</span>,
}

export const WithIconEnd = Template.bind({})
WithIconEnd.args = {
	accent: 'green',
	children: 'Success',
	icon: <CheckIcon height={14} width={14} />,
	iconPosition: 'end',
}

export const Uppercase = Template.bind({})
Uppercase.args = {
	accent: 'blue',
	children: 'Chip',
	uppercase: true,
}

export const Red = Template.bind({})
Red.args = {
	accent: 'red',
	children: 'Chip',
}

export const Orange = Template.bind({})
Orange.args = {
	accent: 'orange',
	children: 'Chip',
}

export const Green = Template.bind({})
Green.args = {
	accent: 'green',
	children: 'Chip',
}
