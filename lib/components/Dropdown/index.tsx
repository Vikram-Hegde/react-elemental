import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import styles from './Dropdown.module.scss'
import ChevronDown from '~icons/solar/alt-arrow-down-linear'

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
				<ChevronDown />
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
