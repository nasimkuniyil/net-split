import { PenLine, Trash2, Users2 } from "lucide-react";
import type { Expense } from "../types";

interface ExpenseListProps {
    expense: Expense;
    paidByName: string;

    onEdit: () => void;
    onDelete: () => void;
}

export default function ExpenseList({
    expense,
    paidByName,
    onEdit,
    onDelete,
}: ExpenseListProps) {
    return (
        <div className="group p-5 rounded bg-neutral-50 flex justify-between cursor-pointer">
            <div className="w-full">
                <h3 className="text-lg font-bold text-neutral-600">
                    {expense.title}
                </h3>

                <div className="mt-1 text-sm text-neutral-500 flex gap-2 flex-wrap">
                    <p className="text-emerald-600 font-bold">
                        ₹{expense.amount}
                    </p>

                    <p>Paid by</p>

                    <p className="font-semibold">
                        {paidByName}
                    </p>

                    <p className="flex items-center gap-1">
                        <Users2 size={15} />
                        {expense.participants.length}
                    </p>
                </div>
            </div>

            <div className="flex gap-3 items-center text-neutral-500 opacity-0 group-hover:opacity-100 transition">
                <PenLine
                    size={18}
                    onClick={onEdit}
                    className="hover:text-blue-500"
                />

                <Trash2
                    size={18}
                    onClick={onDelete}
                    className="hover:text-red-500"
                />
            </div>
        </div>
    );
}