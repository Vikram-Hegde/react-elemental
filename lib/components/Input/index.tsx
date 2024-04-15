import { InputHTMLAttributes, useId } from 'react'
import styles from './Input.module.scss'
import clsx from 'clsx'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string
	startIcon?: React.ReactNode
	endIcon?: React.ReactNode
}

const Input = ({ value, onChange, className, ...props }: InputProps) => {
	const generatedId = useId()
	const id = props?.id ?? generatedId
	const classNames = clsx(styles.input, className)

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
					{...props}
				/>
				{props?.endIcon}
			</div>
		</div>
	)
}

export default Input
