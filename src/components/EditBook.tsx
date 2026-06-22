import { FormEvent, useState } from "react";
import { useExpenseStore } from "../store/expenseStore";
import Button from "./Button";

interface EditBookProps {
    bookId: string;
    initialName: string;
    initialDescription?: string;
    onSuccess: () => void;
}

export default function EditBook({
    bookId,
    initialName,
    initialDescription,
    onSuccess,
}: EditBookProps) {
    const updateBook = useExpenseStore(
        (state) => state.updateBook
    );

    const [name, setName] =
        useState(initialName);

    const [description, setDescription] =
        useState(initialDescription ?? "");

    const handleSubmit = (
        e: FormEvent
    ) => {
        e.preventDefault();

        if (!name.trim()) return;

        updateBook(bookId, {
            name,
            description,
        });

        onSuccess();
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-4"
        >
            <div>
                <label className="font-medium">
                    Title
                </label>

                <input
                    value={name}
                    onChange={(e) =>
                        setName(e.target.value)
                    }
                    className="w-full border px-3 py-2 rounded"
                    autoFocus
                />
            </div>

            <div>
                <label className="font-medium">
                    Description
                </label>

                <textarea
                    value={description}
                    onChange={(e) =>
                        setDescription(
                            e.target.value
                        )
                    }
                    rows={3}
                    className="w-full border px-3 py-2 rounded"
                />
            </div>

            <div className="text-center">
                <Button type="submit">
                    Save Changes
                </Button>
            </div>
        </form>
    );
}