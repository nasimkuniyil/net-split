import { Trash2, Users2 } from "lucide-react";
import type { Expense } from "../types";
import type { MouseEvent } from "react";

interface ExpenseListProps {
    expense: Expense;
    paidByName: string;

    onEdit: () => void;
    onDelete: (e: MouseEvent<SVGSVGElement, globalThis.MouseEvent>) => void;
}

export default function ExpenseList({
    expense,
    paidByName,
    onEdit,
    onDelete,
}: ExpenseListProps) {
    return (
        <div className="group p-5 rounded bg-neutral-50 flex justify-between cursor-pointer"
            onClick={onEdit}>
            <div className="w-full">
                <h3 className="lg:text-lg font-bold text-neutral-600">
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

            <div className="flex gap-3 items-center text-neutral-500 opacity-100 lg:opacity-0 group-hover:opacity-100 transition">
                <Trash2
                    size={18}
                    onClick={(e) => onDelete(e)}
                    className="hover:text-red-500"
                />
            </div>
        </div>
    );
}