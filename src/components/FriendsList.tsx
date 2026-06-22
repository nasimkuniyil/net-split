import { X } from "lucide-react";

export default function FriendsList() {
    return (
        <div className={`group w-full p-4 rounded bg-neutral-50 flex justify-between cursor-pointer`}>
            <div className="w-full flex items-center gap-5">
                <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">U</div>
                <h3 className="text font-bold text-neutral-600">{"User One"}</h3>
            </div>
            <div className="flex sm:hidden group-hover:flex items-center text-neutral-500">
                <X size={18} className="hover:text-red-500 cursor-pointer w-full" />
            </div>
        </div>
    )
}
