import clsx from 'clsx'
import { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary' | 'tertiary'
	size?: 'sm' | 'md' | 'lg'
	startIcon?: ReactNode
	endIcon?: ReactNode
	fullWidth?: boolean
	borderAccent?: 'primary' | 'secondary'
	uppercase?: boolean
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
	return (
		<button
			className={clsx(
				styles.btn,
				styles[`btn--${variant}`],
				styles[`btn--${size}`],
				styles[`btn--${fullWidth ? 'full' : ''}`],
				styles[`btn--border-${borderAccent}`],
				disabled && styles[`btn--disabled`],
				className
			)}
			{...props}
		>
			{props.startIcon && <span>{props.startIcon}</span>}
			{children}
			{props.endIcon && <span>{props.endIcon}</span>}
		</button>
	)
}

export default Button
