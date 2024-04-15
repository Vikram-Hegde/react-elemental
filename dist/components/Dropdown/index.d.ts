interface DropdownOption {
    value: string;
    label: string;
}
interface DropdownProps {
    options: DropdownOption[];
    placeholder: string;
    value?: DropdownOption | null;
    onChange: (option: DropdownOption) => void;
    className?: string;
    dropdownClassName?: string;
    optionClassName?: string;
    dropdownBtnClassName?: string;
    fullWidth?: boolean;
    variant?: 'primary' | 'secondary';
}
declare const Dropdown: ({ options, placeholder, value, onChange, className, dropdownClassName, optionClassName, dropdownBtnClassName, fullWidth, variant, ...props }: DropdownProps) => import("react/jsx-runtime").JSX.Element;
export default Dropdown;
