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
}
declare const Dropdown: ({ options, placeholder, value, onChange, className, dropdownClassName, optionClassName, dropdownBtnClassName, ...props }: DropdownProps) => import("react/jsx-runtime").JSX.Element;
export default Dropdown;
