import type { ReactNode } from "react";

interface IButton {
    children?: ReactNode;
    handleClick?(): void;
    fullWidth?: boolean;
    outline?:boolean;
}

export default function Button({ children, handleClick, fullWidth, outline }: IButton) {
    return (
        <button className={` ${outline ? "text-emerald-600 hover:text-emerald-700" : "text-white bg-emerald-600 hover:bg-emerald-700 py-2 px-4"} rounded-lg cursor-pointer duration-100 ${fullWidth && 'w-full'}`} onClick={handleClick || undefined}>{children}</button>
    )
}