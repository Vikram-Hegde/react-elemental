import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'tertiary';
    size?: 'sm' | 'md' | 'lg';
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    fullWidth?: boolean;
    borderAccent?: 'primary' | 'secondary';
    uppercase?: boolean;
    disabled?: boolean;
}
declare const Button: ({ children, variant, size, fullWidth, borderAccent, disabled, uppercase, className, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Button;
