import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import styles from './Dropdown.module.scss'

interface DropdownOption {
	value: string
	label: string
}

interface DropdownProps {
	options: DropdownOption[]
	placeholder: string
	value?: DropdownOption | null
	onChange: (option: DropdownOption) => void
	className?: string
	dropdownClassName?: string
	optionClassName?: string
	dropdownBtnClassName?: string
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
			className={clsx(styles.dropdown, className)}
			ref={dropdownRef}
			{...props}
		>
			<div
				className={clsx(styles['dropdown-btn'], dropdownBtnClassName)}
				onClick={toggleDropdown}
			>
				{value ? value.label : placeholder}
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
			</div>
			{isOpen && (
				<div className={clsx(styles['dropdown-content'], dropdownClassName)}>
					{options.map((option) => (
						<div
							key={option.value}
							className={clsx(styles['dropdown-item'], optionClassName)}
							onClick={() => handleOptionClick(option)}
						>
							{option.label}
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default Dropdown
