import { Trash2, Users2 } from "lucide-react";

export default function ExpenseList() {
    return (
        <div className={`group p-5 rounded bg-neutral-50 flex justify-between cursor-pointer`}>
            <div className="w-full">
                <h3 className={`text-lg text font-bold text-neutral-600`}>{"Tea and Snacks"}</h3>
                <div className="mt-1 text-sm text-neutral-500 flex  gap-2">
                    <p className="text-emerald-600 font-bold">₹{100}</p>
                    <p>Paid by</p>
                    <p className="font-semibold"> {"Nasim"}</p>
                    <p className="flex items-center gap-1"><Users2 size={15} /> {3}</p>
                </div>
            </div>
            <div className="flex sm:hidden group-hover:flex items-center text-neutral-500">
                <Trash2 size={18} className="hover:text-red-500 cursor-pointer w-full"/>
            </div>
        </div>
    )
}
