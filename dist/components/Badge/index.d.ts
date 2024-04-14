import { HTMLAttributes } from 'react';

type BadgeVariant = 'primary' | 'secondary' | 'success' | 'danger';
interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: BadgeVariant;
    count?: number;
    children: React.ReactNode;
    maxCount?: number;
    anchor: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
    anchorOffset?: {
        top?: string;
        right?: string;
        bottom?: string;
        left?: string;
    };
}
declare const Badge: ({ variant, count, maxCount, anchor, anchorOffset, children, }: BadgeProps) => import("react/jsx-runtime").JSX.Element;
export default Badge;
