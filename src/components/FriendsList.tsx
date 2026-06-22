import {
    PenLine,
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
        <div className="group p-4 rounded bg-neutral-50 flex justify-between items-center">
            <p className="font-medium">
                {friend.name}
            </p>

            <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition">
                <PenLine
                    size={18}
                    onClick={onEdit}
                    className="cursor-pointer hover:text-blue-500"
                />

                <Trash2
                    size={18}
                    onClick={onDelete}
                    className="cursor-pointer hover:text-red-500"
                />
            </div>
        </div>
    );
}