import Button from "./Button";

export default function CreateBook() {
    return (
        <div>
            <div className="flex flex-col gap-2 mx-auto mb-4">
                <label htmlFor="" className="text-nowrap">Title</label>
                <input type="text" className="w-full border border-neutral-300 px-3 py-1.5 rounded focus:outline-1 focus:outline-emerald-500 placeholder:text-neutral-400" placeholder="Weekend Ride" autoFocus />
            </div>
            <div className="flex flex-col gap-2 mx-auto mb-4">
                <label htmlFor="" className="text-nowrap">Description</label>
                <textarea className="w-full border border-neutral-300 px-3 py-1.5 rounded focus:outline-1 focus:outline-emerald-500 placeholder:text-neutral-400" placeholder="Weekend Ride" rows={3} />
            </div>
            <div className="text-center">
                <Button>Create Book</Button>
            </div>
        </div>
    )
}
