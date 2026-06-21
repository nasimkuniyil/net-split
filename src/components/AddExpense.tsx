import Button from "./Button";

export default function AddExpense() {
    return (
        <div>
            <div className="flex flex-col gap-2 mx-auto mb-4">
                <label htmlFor="" className="text-nowrap">Expense title</label>
                <input type="text" className="w-full border border-neutral-300 px-3 py-2 rounded focus:outline-1 focus:outline-emerald-500 placeholder:text-neutral-400" placeholder="Weekend Ride" autoFocus />
            </div>
            <div className="flex flex-col gap-2 mx-auto mb-4">
                <label htmlFor="" className="text-nowrap">Amount</label>
                <input type="number" className="w-full border border-neutral-300 px-3 py-2 rounded focus:outline-1 focus:outline-emerald-500 placeholder:text-neutral-400" placeholder="Weekend Ride" />
            </div>
            <div className="flex flex-col gap-2 mx-auto mb-4">
                <label htmlFor="" className="text-nowrap">Paid by</label>
                <select className="w-full border border-neutral-300 px-3 py-2 rounded focus:outline-1 focus:outline-emerald-500 placeholder:text-neutral-400">
                    <option value="" disabled selected>Select</option>
                    <option value="user-1" >Nasim</option>
                    <option value="user-2">Rafi</option>
                    <option value="user-3">Minhaj</option>
                </select>
            </div>
            <div className="flex flex-col gap-2 mx-auto mb-4">
                <label htmlFor="" className="text-nowrap">Participants</label>
                <ul className="pl-8">
                    <li className="flex items-center gap-2">
                        <input id="user-1" type="checkbox" className="checked:accent-emerald-500" checked/>
                        <label htmlFor="user-1">Nasim</label>
                    </li>
                    <li className="flex items-center gap-2">
                        <input id="user-2" type="checkbox" className="checked:accent-emerald-500" checked/>
                        <label htmlFor="user-2">Rafi</label>
                    </li>
                    <li className="flex items-center gap-2">
                        <input id="user-3" type="checkbox" className="checked:accent-emerald-500" checked/>
                        <label htmlFor="user-3">Minhaj</label>
                    </li>
                </ul>
            </div>
            <div className="text-center">
                <Button>+ Add Expense</Button>
            </div>
        </div>
    )
}
