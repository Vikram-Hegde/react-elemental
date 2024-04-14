import { InputHTMLAttributes, useId } from 'react'
import styles from './Input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string
	startIcon?: React.ReactNode
	endIcon?: React.ReactNode
}

const Input = ({ value, onChange, ...props }: InputProps) => {
	const id = props?.id ?? useId()

	return (
		<div className={styles.input}>
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
