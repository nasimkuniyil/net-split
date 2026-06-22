import {
    Trash2,
} from "lucide-react";
import type { Friend } from "../types";

interface FriendsListProps {
    friend: Friend;

    onEdit: () => void;

    onDelete: () => void;
}

export default function FriendsList({
    friend,
    onEdit,
    onDelete,
}: FriendsListProps) {
    return (
        <div className="group p-4 rounded bg-neutral-50 flex justify-between items-center cursor-pointer"
            onClick={onEdit}>
            <p className="font-medium">
                {friend.name}
            </p>

            <div className=" flex gap-3 opacity-100 lg:opacity-0 group-hover:opacity-100 transition">
                <Trash2
                    size={18}
                    onClick={(e) => {
                        e.stopPropagation();
                        onDelete()
                    }}
                    className="cursor-pointer hover:text-red-500"
                />
            </div>
        </div>
    );
}