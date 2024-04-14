import { Meta, StoryFn } from '@storybook/react'
import { Badge } from '../../lib'
import BellIcon from '~icons/solar/bell-linear'

const meta: Meta = {
	title: 'Badge',
	component: Badge,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: {
				type: 'select',
				options: ['primary', 'secondary', 'success', 'danger'],
			},
		},
		anchor: {
			control: {
				type: 'select',
				options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
			},
		},
	},
}

export default meta

const Template: StoryFn<typeof Badge> = (args) => (
	<Badge {...args}>
		<div
			style={{
				width: '50px',
				height: '50px',
				backgroundColor: '#ddd',
				borderRadius: '50%',
			}}
		></div>
	</Badge>
)

const IconTemplate: StoryFn<typeof Badge> = (args) => (
	<Badge {...args}>
		<BellIcon height={32} width={32} />
	</Badge>
)

export const Default = Template.bind({})
Default.args = {
	variant: 'primary',
	count: 5,
	anchor: 'top-right',
}

export const Secondary = Template.bind({})
Secondary.args = {
	...Default.args,
	variant: 'secondary',
}

export const Success = Template.bind({})
Success.args = {
	...Default.args,
	variant: 'success',
}

export const Danger = Template.bind({})
Danger.args = {
	...Default.args,
	variant: 'danger',
}

export const TopLeft = Template.bind({})
TopLeft.args = {
	...Default.args,
	anchor: 'top-left',
}

export const BottomRight = Template.bind({})
BottomRight.args = {
	...Default.args,
	anchor: 'bottom-right',
}

export const BottomLeft = Template.bind({})
BottomLeft.args = {
	...Default.args,
	anchor: 'bottom-left',
}

export const MaxCount = Template.bind({})
MaxCount.args = {
	...Default.args,
	count: 15,
}

export const NoCount = Template.bind({})
NoCount.args = {
	...Default.args,
	count: undefined,
}

export const Icon = IconTemplate.bind({})
Icon.args = {
	...Default.args,
	anchorOffset: {
		top: '-4px',
	},
}
