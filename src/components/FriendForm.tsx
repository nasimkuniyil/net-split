import { FormEvent, useState } from "react";
import Button from "./Button";
import { useExpenseStore } from "../store/expenseStore";
import InputField from "./InputField";

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

            <InputField title="Friend Name" value={name} handleChange={(e)=>setName(e.target.value)} placeholder="eg: John Deo" autofocus/>

            <Button type="submit">
                {friendId
                    ? "Save Changes"
                    : "Add Friend"}
            </Button>
        </form>
    );
}