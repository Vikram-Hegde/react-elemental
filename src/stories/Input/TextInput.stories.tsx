import { Meta, StoryFn } from '@storybook/react'
import { Input } from '../../../lib'
import SearchIcon from '~icons/solar/magnifer-linear'

const meta: Meta = {
	component: Input,
	tags: ['autodocs'],
}

export default meta

const Template: StoryFn<typeof Input> = (args) => {
	return <Input {...args} />
}

export const Default = Template.bind({})
Default.args = {
	placeholder: 'Type something...',
}

export const WithLabel = Template.bind({})
WithLabel.args = {
	label: 'Search',
	placeholder: 'Type something...',
}

export const WithStartIcon = Template.bind({})
WithStartIcon.args = {
	startIcon: <SearchIcon />,
	placeholder: 'Type something...',
}

export const WithEndIcon = Template.bind({})
WithEndIcon.args = {
	endIcon: <SearchIcon />,
	placeholder: 'Type something...',
}
