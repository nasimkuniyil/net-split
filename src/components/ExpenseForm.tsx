import {  useMemo, useState, type SubmitEvent, } from "react";
import Button from "./Button";
import { useExpenseStore } from "../store/expenseStore";
import type { Expense } from "../types";
import InputField from "./InputField";

interface ExpenseFormProps {
    bookId: string;
    initialData?: Expense;
    onSuccess: () => void;
}

export default function ExpenseForm({
    bookId,
    initialData,
    onSuccess,
}: ExpenseFormProps) {
    const book = useExpenseStore(
        (state) =>
            state.books.find(
                (book) => book.id === bookId
            )
    );

    const addExpense = useExpenseStore(
        (state) => state.addExpense
    );

    const updateExpense = useExpenseStore(
        (state) => state.updateExpense
    );

    const friendIds = useMemo(
        () =>
            book?.friends.map(
                (friend) => friend.id
            ) ?? [],
        [book]
    );

    const [title, setTitle] = useState(
        initialData?.title ?? ""
    );

    const [amount, setAmount] = useState(
        initialData?.amount ?? 0
    );

    const [paidBy, setPaidBy] = useState(
        initialData?.paidBy ?? ""
    );

    const [participants, setParticipants] =
        useState<string[]>(
            initialData?.participants ??
            friendIds
        );

    if (!book) return null;

    const toggleParticipant = (
        friendId: string
    ) => {
        setParticipants((prev) =>
            prev.includes(friendId)
                ? prev.filter(
                    (id) => id !== friendId
                )
                : [...prev, friendId]
        );
    };

    const handleSubmit = (
        e: SubmitEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        if (
            !title.trim() ||
            !amount ||
            !paidBy ||
            participants.length === 0
        ) {
            return;
        }

        const payload = {
            title,
            amount,
            paidBy,
            participants,
        };

        if (initialData) {
            updateExpense(
                bookId,
                initialData.id,
                payload
            );
        } else {
            addExpense(bookId, payload);
        }

        onSuccess();
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-4"
        >

            <InputField title="Expense Title" value={title} handleChange={(e) => setTitle(e.target.value)} placeholder="eg: Tea and Snacks" autofocus />
            <InputField title="Amount" type="number" value={amount} handleChange={(e) => setAmount(Number(e.target.value))} />

            <div>
                <label>Paid By</label>
                <select
                    value={paidBy}
                    onChange={(e) => setPaidBy(e.target.value)}
                    className="w-full border border-neutral-300 px-3 py-1.5 rounded focus:outline-1 focus:outline-emerald-500"
                >
                    <option value=""> Select Friend </option>
                    {book.friends.map(
                        (friend) => (
                            <option key={friend.id} value={friend.id}>
                                {friend.name}
                            </option>
                        )
                    )}
                </select>
            </div>

            <div>
                <label>
                    Participants
                </label>

                <div className="mt-2 flex flex-col gap-2 accent-emerald-500">
                    {book.friends.map(
                        (friend) => (
                            <label
                                key={friend.id}
                                className="flex gap-2"
                            >
                                <input
                                    type="checkbox"
                                    checked={participants.includes(
                                        friend.id
                                    )}
                                    onChange={() =>
                                        toggleParticipant(
                                            friend.id
                                        )
                                    }
                                />

                                {friend.name}
                            </label>
                        )
                    )}
                </div>
            </div>

            <Button type="submit">
                {initialData
                    ? "Save Changes"
                    : "Add Expense"}
            </Button>
        </form>
    );
}