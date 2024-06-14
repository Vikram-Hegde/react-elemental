import clsx from 'clsx'
import styles from './Chip.module.scss'

interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
	/**
	 * Accent color of the chip
	 */
	accent: 'green' | 'orange' | 'red' | 'blue'
	/**
	 * Icon to display beside the text
	 */
	icon?: React.ReactNode
	/**
	 * Position of the icon
	 */
	iconPosition?: 'start' | 'end'
	/**
	 * If true, the text will be in uppercase
	 */
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
