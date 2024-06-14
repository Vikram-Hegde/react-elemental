import clsx from 'clsx'
import styles from './Badge.module.scss'
import { HTMLAttributes } from 'react'

type BadgeVariant = 'primary' | 'secondary' | 'success' | 'danger'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
	/**
	 * The variant of the badge
	 */
	variant?: BadgeVariant
	/**
	 * The count which will be displayed in the badge
	 */
	count?: number
	children: React.ReactNode
	/**
	 * The maximum count which will be displayed in the badge
	 */
	maxCount?: number
	/**
	 * The anchor/position of the badge
	 */
	anchor: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
	/**
	 * The offset of the badge for finer control
	 */
	anchorOffset?: {
		top?: string
		right?: string
		bottom?: string
		left?: string
	}
	className?: string
}

const Badge = ({
	variant = 'primary',
	count,
	maxCount = 10,
	anchor = 'top-right',
	anchorOffset,
	className,
	children,
}: BadgeProps) => {
	const badgeClasses = clsx(
		styles.badge,
		styles[`badge--${variant}`],
		styles[`badge--${anchor}`],
		className
	)

	return (
		<span className={styles.wrapper}>
			{children}
			<span className={badgeClasses} style={{ ...anchorOffset }}>
				<span className={styles.count}>
					{count ? (count > maxCount ? `${maxCount}+` : count) : null}
				</span>
			</span>
		</span>
	)
}

export default Badge
