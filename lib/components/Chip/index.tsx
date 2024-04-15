import clsx from 'clsx'
import styles from './Chip.module.scss'

interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
	accent: 'green' | 'orange' | 'red' | 'blue'
	icon?: React.ReactNode
	iconPosition?: 'start' | 'end'
	uppercase?: boolean
}

const Chip = ({
	accent = 'blue',
	children,
	icon,
	iconPosition = 'start',
	className,
	uppercase = false,
	...props
}: ChipProps) => {
	const chipClassNames = clsx(
		styles.chip,
		styles[`chip--${accent}`],
		{
			[styles[`chip--uppercase`]]: uppercase,
		},
		className
	)

	return (
		<span className={chipClassNames} {...props}>
			{iconPosition === 'start' && icon}
			{children}
			{iconPosition === 'end' && icon}
		</span>
	)
}

export default Chip
