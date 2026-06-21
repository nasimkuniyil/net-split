import type { ReactNode } from "react";

interface IButton {
    children?: ReactNode;
    handleClick?(): void;
    fullWidth?: boolean;
}

export default function Button({ children, handleClick, fullWidth }: IButton) {
    return (
        <button className={` text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg py-2 px-4 cursor-pointer duration-100 ${fullWidth && 'w-full'}`} onClick={handleClick || undefined}>{children}</button>
    )
}