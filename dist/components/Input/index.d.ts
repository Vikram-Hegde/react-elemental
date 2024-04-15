import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
}
declare const Input: ({ value, onChange, className, ...props }: InputProps) => import("react/jsx-runtime").JSX.Element;
export default Input;
