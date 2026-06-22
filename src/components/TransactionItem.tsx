interface TransactionItemProps {
    from: string;
    to: string;
    amount: number;
}

export default function TransactionItem({
    from,
    to,
    amount,
}: TransactionItemProps) {
    return (
        <div className="bg-emerald-50 p-4 rounded flex justify-between items-center">
            <div>
                {from}
                <span className="mx-2 text-emerald-600">
                    →
                </span>
                {to}
            </div>

            <div className="font-bold text-emerald-600">
                ₹{amount.toFixed(2)}
            </div>
        </div>
    );
}