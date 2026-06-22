import type { ReactNode } from "react";

interface IButton {
    children?: ReactNode;
    handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    fullWidth?: boolean;
    outline?: boolean;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
}

export default function Button({ children, handleClick, fullWidth, outline, type, disabled }: IButton) {
    return (
        <button type={type || "button"} className={` ${outline ? "text-emerald-600 hover:text-emerald-700" : "text-white bg-emerald-600 hover:bg-emerald-700 py-2 px-4"} text-nowrap rounded-lg cursor-pointer duration-100 ${fullWidth && 'w-full'} disabled:opacity-50 disabled:cursor-not-allowed`} onClick={handleClick} disabled={disabled}>{children}</button>
    )
}