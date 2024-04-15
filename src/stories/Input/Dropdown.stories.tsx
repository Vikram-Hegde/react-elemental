import { useState } from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { Dropdown } from '../../../lib'

const options = [
	{ label: 'Option 1', value: 'option1' },
	{ label: 'Option 2', value: 'option2' },
	{ label: 'Option 3', value: 'option3' },
]

const meta: Meta = {
	component: Dropdown,
	tags: ['autodocs'],
	argTypes: {
		options: {
			control: {
				type: 'object',
			},
		},
		value: {
			control: {
				type: 'object',
			},
		},
		onChange: {
			action: 'onChange',
		},
	},
}

export default meta

const Template: StoryFn<typeof Dropdown> = (args) => {
	const [value, setValue] = useState<typeof args.value>(args.value || null)

	const handleChange = (option: (typeof options)[0]) => {
		setValue(option)
	}

	return <Dropdown {...args} value={value} onChange={handleChange} />
}

export const Default = Template.bind({})
Default.args = {
	options,
	placeholder: 'Select an option',
}

export const WithDefaultValue = Template.bind({})
WithDefaultValue.args = {
	options,
	placeholder: 'Select an option',
	value: options[1],
}

export const WithCustomStyles = Template.bind({})
WithCustomStyles.args = {
	options,
	placeholder: 'Select an option',
	className: 'custom-dropdown',
	dropdownClassName: 'custom-dropdown-content',
	optionClassName: 'custom-dropdown-item',
}
