import { useState, type FormEvent } from "react";
import { type CreateBookData, useExpenseStore } from "../store/expenseStore";
import Button from "./Button";
import InputField from "./InputField";

const initialFormState: CreateBookData = {
    name: "",
    description: ""
};

export default function CreateBook({ onSuccess }: { onSuccess: () => void }) {
    const [data, setData] = useState<CreateBookData>(initialFormState);
    const { addBook } = useExpenseStore();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!data.name.trim()) return;

        addBook(data);
        setData(initialFormState);
        onSuccess();
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputField placeholder="eg: Weekend Ride" autofocus value={data.name} title="name" handleChange={(e) => setData(prev => ({ ...prev, name: e.target.value }))} />

            <div className="flex flex-col gap-2 mx-auto mb-4">
                <label className="text-nowrap font-medium text-neutral-700">Description</label>
                <textarea
                    value={data.description}
                    onChange={(e) => setData(prev => ({ ...prev, description: e.target.value }))}
                    name="description"
                    className="w-full border border-neutral-300 px-3 py-1.5 rounded focus:outline-1 focus:outline-emerald-500 placeholder:text-neutral-400"
                    placeholder="Weekend getaway notes..."
                    rows={3}
                />
            </div>

            <div className="text-center">
                <Button type="submit">Create Book</Button>
            </div>
        </form>
    )
}
