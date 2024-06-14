import clsx from 'clsx'
import { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	/**
	 * Button variants can be primary, secondary, or tertiary
	 */
	variant?: 'primary' | 'secondary' | 'tertiary'
	/**
	 * Button sizes can be small, medium, or large
	 */
	size?: 'sm' | 'md' | 'lg'
	/**
	 * The icon which is displayed to the left of the button text
	 */
	startIcon?: ReactNode
	/**
	 * The icon which is displayed to the right of the button text
	 */
	endIcon?: ReactNode
	/**
	 * If true, the button will take up the full width of its container
	 */
	fullWidth?: boolean
	/**
	 * The variant of the button's border
	 */
	borderAccent?: 'primary' | 'secondary'
	/**
	 * If true, the button text will be in uppercase
	 */
	uppercase?: boolean
	/**
	 * If true, the button will be disabled
	 */
	disabled?: boolean
}

const Button = ({
	children,
	variant = 'primary',
	size = 'md',
	fullWidth = false,
	borderAccent = 'primary',
	disabled = false,
	uppercase = false,
	className,
	...props
}: ButtonProps) => {
	const buttonClasses = clsx(
		styles.btn,
		styles[`btn--${variant}`],
		styles[`btn--${size}`],
		styles[`btn--${fullWidth ? 'full' : ''}`],
		styles[`btn--border-${borderAccent}`],
		{ [styles[`btn--disabled`]]: disabled },
		{ [styles[`btn--uppercase`]]: uppercase },
		className
	)

	return (
		<button className={buttonClasses} {...props}>
			{props?.startIcon}
			{children}
			{props?.endIcon}
		</button>
	)
}

export default Button
