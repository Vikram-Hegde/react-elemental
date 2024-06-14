import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import styles from './Dropdown.module.scss'
import Button from '../Button'

interface DropdownOption {
	value: string
	label: string
}

interface DropdownProps {
	/**
	 * The options for the dropdown
	 */
	options: DropdownOption[]
	/**
	 * The placeholder for the dropdown
	 */
	placeholder: string
	/**
	 * The value of the selected option
	 */
	value?: DropdownOption | null
	/**
	 * onChange is triggered when option is changed
	 * @param option The selected option
	 * @returns void
	 */
	onChange: (option: DropdownOption) => void
	className?: string
	/**
	 * Custom styles for dropdown wrapper
	 */
	dropdownClassName?: string
	/**
	 * Custom styles for dropdown options
	 */
	optionClassName?: string
	/**
	 * Custom styles for dropdown button
	 */
	dropdownBtnClassName?: string
	/**
	 * Whether the dropdown should be full width
	 */
	fullWidth?: boolean
	/**
	 * The variant of the dropdown which can be primary or secondary
	 */
	variant?: 'primary' | 'secondary'
	/**
	 * Whether the dropdown is disabled
	 */
	disabled?: boolean
}

const Dropdown = ({
	options,
	placeholder,
	value,
	onChange,
	className,
	dropdownClassName,
	optionClassName,
	dropdownBtnClassName,
	fullWidth,
	variant = 'primary',
	disabled = false,
	...props
}: DropdownProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const dropdownRef = useRef<HTMLDivElement>(null)

	const handleOptionClick = (option: DropdownOption) => {
		onChange(option)
		setIsOpen(false)
	}

	const toggleDropdown = () => {
		setIsOpen(!isOpen)
	}

	const handleClickOutside = (event: MouseEvent) => {
		if (
			dropdownRef.current &&
			!dropdownRef.current.contains(event.target as Node)
		) {
			setIsOpen(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside)
		return () => {
			document.removeEventListener('click', handleClickOutside)
		}
	}, [])

	return (
		<div
			className={clsx(
				styles.dropdown,
				fullWidth && styles['dropdown--full'],
				styles[`dropdown--${variant}`],
				className
			)}
			ref={dropdownRef}
			{...props}
		>
			<Button
				endIcon={
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="1em"
						height="1em"
						viewBox="0 0 24 24"
					>
						<path
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							d="m19 9l-7 6l-7-6"
						></path>
					</svg>
				}
				variant="secondary"
				borderAccent="secondary"
				className={clsx(styles['dropdown-btn'], dropdownBtnClassName, {
					[styles['dropdown-btn--disabled']]: disabled,
				})}
				onClick={toggleDropdown}
				fullWidth={fullWidth}
				disabled={disabled}
			>
				{value ? (
					value.label
				) : (
					<span className={styles['dropdown__placeholder']}>{placeholder}</span>
				)}
			</Button>
			{isOpen && (
				<div className={clsx(styles['dropdown-content'], dropdownClassName)}>
					{options.map((option) => (
						<Button
							className={clsx(styles['dropdown-item'], optionClassName)}
							variant="tertiary"
							size="sm"
							fullWidth
							onClick={() => handleOptionClick(option)}
						>
							{option.label}
						</Button>
					))}
				</div>
			)}
		</div>
	)
}

export default Dropdown
