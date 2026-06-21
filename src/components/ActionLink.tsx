import { type ReactNode } from 'react'

interface IActionLink {
    children: ReactNode;
    href: string;
    fill?: boolean;
    newPage?: boolean;
    underline?: boolean;
    light?: boolean;
}

const ACTION_LINK_STYLE = {
    fill: "text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg py-2 px-4"
}

export default function ActionLink({ children, href, fill, newPage, underline, light }: IActionLink) {
    return (
        <a
            href={href}
            className={`cursor-pointer duration-100 ${light && "text-neutral-500"} ${fill && ACTION_LINK_STYLE.fill} ${underline && "hover:underline "}`}
            target={newPage ? '_blank' : undefined}
            rel={newPage ? 'noreferrer noopener' : undefined}
        >
            {children}
        </a>
    )
}
