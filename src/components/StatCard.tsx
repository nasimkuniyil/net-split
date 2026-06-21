import { IndianRupee } from "lucide-react"


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

interface IStatCard {
    amount?: number;
    color?: keyof typeof STAT_CARD_COLORS
}

function StatCard({ amount, color = "default" }: IStatCard) {
    return (
        <div className={`flex gap-3 items-center p-3 rounded ${STAT_CARD_COLORS[color].bg}`}>
            <div className={`p-2 rounded-lg ${STAT_CARD_COLORS[color].bgDark} ${STAT_CARD_COLORS[color].text}`}>
                <IndianRupee />
            </div>
            <div>
                <p className={`text-sm text-neutral-600`}>Total Expences:</p>
                <p className={`text-lg ${STAT_CARD_COLORS[color].text} font-bold mt-1`}>{amount || 0}</p>
            </div>
        </div>
    )
}

export default StatCard