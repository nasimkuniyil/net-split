import type { ReactNode } from "react";

interface IButton {
    children?: ReactNode;
    handleClick?(): void;
    fullWidth?: boolean;
    outline?: boolean;
    type?: "submit" | "reset";
}

export default function Button({ children, handleClick, fullWidth, outline, type }: IButton) {
    return (
        <button type={type || undefined} className={` ${outline ? "text-emerald-600 hover:text-emerald-700" : "text-white bg-emerald-600 hover:bg-emerald-700 py-2 px-4"} text-nowrap rounded-lg cursor-pointer duration-100 ${fullWidth && 'w-full'}`} onClick={handleClick || undefined}>{children}</button>
    )
}