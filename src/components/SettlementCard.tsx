interface SettlementCardProps {
    name: string;
    amount: number;
    type: "pay" | "receive";
}

export default function SettlementCard({
    name,
    amount,
    type,
}: SettlementCardProps) {
    return (
        <div className="p-4 rounded bg-neutral-50 flex gap-3 justify-between items-center">
            <h3 className="font-medium lg:text-lg">
                {name}
            </h3>

            <div className="flex items-center gap-3">
                <span className="font-bold lg:text-lg">
                    ₹{amount.toFixed(2)}
                </span>

                <span
                    className={`px-3 py-1 rounded text-sm font-medium
                    ${
                        type === "receive"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-red-100 text-red-700"
                    }`}
                >
                    {type === "receive"
                        ? "Gets Back"
                        : "Pays"}
                </span>
            </div>
        </div>
    );
}