import React, { type ReactNode } from 'react'

interface IActionLink {
    children: ReactNode;
    href: string;
    fill?: boolean;
}

const ACTION_LINK_STYLE = {
    fill: "text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg py-2 px-4 cursor-pointer duration-100"
}

export default function ActionLink({ children, href, fill }: IActionLink) {
    return (
        <a href={href} className={`py-2 px-4 text-neutral-500 cursor-pointer duration-100 ${fill ? ACTION_LINK_STYLE.fill : "hover:underline"}`} target='_blank'>{children}</a>
    )
}
