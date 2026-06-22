import { useState, type SubmitEvent } from "react";
import { useExpenseStore } from "../store/expenseStore";
import Button from "./Button";
import InputField from "./InputField";

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
        e: SubmitEvent<HTMLFormElement>
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

            <InputField placeholder="eg: Weekend Ride" autofocus value={name} title="Title" handleChange={(e) => setName(e.target.value)} />

            <div className="flex flex-col gap-2 mx-auto mb-4">
                <label className="text-nowrap font-medium text-neutral-700">Description</label>

                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={3}
                    className="w-full border border-neutral-300 px-3 py-1.5 rounded focus:outline-1 focus:outline-emerald-500 placeholder:text-neutral-400"
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