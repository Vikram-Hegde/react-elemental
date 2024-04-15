// import Button from '../../lib/components/Button'
import { Button } from '../../lib'
import type { Meta, StoryFn } from '@storybook/react'
import AddIcon from '~icons/solar/add-circle-linear'

const meta: Meta<typeof Button> = {
	component: Button,
	tags: ['autodocs'],
}

export default meta

const Template: StoryFn<typeof Button> = ({ children, ...rest }) => {
	return <Button {...rest}> {children} </Button>
}

export const Default = Template.bind({})
Default.args = {
	children: 'Primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
	children: 'Secondary Button',
	variant: 'secondary',
}

export const SecondaryAlternate = Template.bind({})
SecondaryAlternate.args = {
	children: 'Secondary Button',
	variant: 'secondary',
	borderAccent: 'secondary',
}

export const Tertiary = Template.bind({})
Tertiary.args = {
	children: 'Tertiary Button',
	variant: 'tertiary',
}

export const StartIcon = Template.bind({})
StartIcon.args = {
	children: 'Add',
	startIcon: <AddIcon />,
	size: 'sm',
}

export const EndIcon = Template.bind({})
EndIcon.args = {
	children: 'Add',
	endIcon: <AddIcon />,
	size: 'sm',
}
