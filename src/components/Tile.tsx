import { type ReactNode } from "react"

interface ITile {
    children: ReactNode;
    title?: string;
}

export default function Tile({ children, title }: ITile) {
    return (
        <div className="p-6 bg-white w-full h-full border border-neutral-200 shadow-xs rounded-lg">
            <div className="mb-3">
                <h3 className="md:text-lg font-bold">{title || "Title"}</h3>
            </div>
            {children}
        </div>
    )
}