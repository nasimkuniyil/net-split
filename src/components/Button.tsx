import type { ReactNode } from "react";

interface IButton {
    children?: ReactNode;
    handleClick?(): void
}

export default function Button({ children, handleClick }: IButton) {
    return (
        <button className="w-full text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg py-2 px-4 cursor-pointer duration-100" onClick={handleClick || undefined}>{children}</button>
    )
}