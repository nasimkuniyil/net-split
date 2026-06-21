import { IndianRupee, Users2 } from "lucide-react"


const STAT_CARD_COLORS = {
    default: {
        bg: "bg-neutral-50",
        bgDark: "bg-neutral-200",
        text: "text-neutral-500"
    },
    red: {
        bg: "bg-red-50",
        bgDark: "bg-red-100",
        text: "text-red-500"
    },
    green: {
        bg: "bg-emerald-50",
        bgDark: "bg-emerald-200",
        text: "text-emerald-500"
    },
    blue: {
        bg: "bg-blue-50",
        bgDark: "bg-blue-200",
        text: "text-blue-500"
    },
} as const

const STAT_CARD_TYPE = {
    expense: {
        title: "Total Expenses",
        icon: IndianRupee,
    },

    friend: {
        title: "Total Friends",
        icon: Users2,
    }
} as const;

interface IStatCard {
    amount?: number;
    color?: keyof typeof STAT_CARD_COLORS;
    type?: keyof typeof STAT_CARD_TYPE
}

function StatCard({ amount, color = "default", type = "expense" }: IStatCard) {
    const theme = STAT_CARD_COLORS[color];
    const typeConfig = STAT_CARD_TYPE[type];

    const IconComponent = typeConfig.icon;

    return (
        <div className={`flex gap-3 items-center p-3 rounded ${theme.bg}`}>
            <div className={`p-2 rounded-lg ${theme.bgDark} ${theme.text}`}>
                <IconComponent/>
            </div>
            <div>
                <p className={`text-sm text-neutral-600`}>{typeConfig.title}:</p>
                <p className={`text-lg ${theme.text} font-bold mt-1`}>{amount || 0}</p>
            </div>
        </div>
    )
}

export default StatCard