import { InputHTMLAttributes, useId } from 'react'
import styles from './Input.module.scss'
import clsx from 'clsx'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	/**
	 * Input label to display
	 */
	label?: string
	/**
	 * Icon to display at the start
	 */
	startIcon?: React.ReactNode
	/**
	 * Icon to display at the end
	 */
	endIcon?: React.ReactNode
	/**
	 * Whether the input is disabled
	 */
	disabled?: boolean
}

const Input = ({
	value,
	onChange,
	className,
	disabled = false,
	...props
}: InputProps) => {
	const generatedId = useId()
	const id = props?.id ?? generatedId
	const classNames = clsx(styles.input, className, {
		[styles['input--disabled']]: disabled,
	})

	return (
		<div className={classNames}>
			{props.label && <label htmlFor={id}>{props.label}</label>}
			<div className={styles['input__wrapper']}>
				{props?.startIcon}
				<input
					placeholder={props?.placeholder}
					id={id}
					value={value}
					onChange={onChange}
					disabled={disabled}
					{...props}
				/>
				{props?.endIcon}
			</div>
		</div>
	)
}

export default Input
