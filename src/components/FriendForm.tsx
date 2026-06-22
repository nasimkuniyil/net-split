import { FormEvent, useState } from "react";
import Button from "./Button";
import { useExpenseStore } from "../store/expenseStore";

interface FriendFormProps {
    bookId: string;
    friendId?: string;
    initialName?: string;
    onSuccess: () => void;
}

export default function FriendForm({
    bookId,
    friendId,
    initialName = "",
    onSuccess,
}: FriendFormProps) {
    const [name, setName] = useState(initialName);

    const addFriend = useExpenseStore(
        (state) => state.addFriend
    );

    const updateFriend = useExpenseStore(
        (state) => state.updateFriend
    );

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!name.trim()) return;

        if (friendId) {
            updateFriend(
                bookId,
                friendId,
                name
            );
        } else {
            addFriend(bookId, name);
        }

        onSuccess();
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-4"
        >
            <div>
                <label>
                    Friend Name
                </label>

                <input
                    value={name}
                    onChange={(e) =>
                        setName(
                            e.target.value
                        )
                    }
                    className="w-full border px-3 py-2 rounded"
                    autoFocus
                />
            </div>

            <Button type="submit">
                {friendId
                    ? "Save Changes"
                    : "Add Friend"}
            </Button>
        </form>
    );
}