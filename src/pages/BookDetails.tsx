import { PenLine } from "lucide-react";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { useState } from "react";
import ExpenseForm from "../components/ExpenseForm";
import Tile from "../components/Tile";
import StatCard from "../components/StatCard";
import ExpenseList from "../components/ExpenseList";
import FriendsList from "../components/FriendsList";
import { useParams } from "react-router";
import { useExpenseStore } from "../store/expenseStore";
import EditBook from "../components/EditBook";
import type { Expense, Friend } from "../types";
import FriendForm from "../components/FriendForm";
import { calculateBalances } from "../utils/calculateBalance";
import { generateSettlements } from "../utils/generateSettlements";
import SettlementCard from "../components/SettlementCard";
import TransactionItem from "../components/TransactionItem";
import { generateWhatsappMessage } from "../utils/generateWhatsappMessage";

export default function BookDetails() {

    const [isAddExpOpen, setIsAddExpOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [editingExpense, setEditingExpense] = useState<Expense | null>(null);

    const [isAddFriendOpen, setIsAddFriendOpen] = useState(false);
    const [editingFriend, setEditingFriend] = useState<Friend | null>(null);

    const { id } = useParams<{ id: string }>();
    const book = useExpenseStore((state) => state.books.find((book) => book.id === id));
    const deleteExpense = useExpenseStore((state) => state.deleteExpense);
    const deleteFriend = useExpenseStore((state) => state.deleteFriend);

    if (!book) {
        return <div className="p-8 text-center text-neutral-500">Expense book not found.</div>;
    }

    const totalExpense = book.expenses.reduce((sum, expense) => sum + expense.amount, 0);
    const balances = calculateBalances(book);
    const settlements = generateSettlements(balances);
    const whatsappMessage = generateWhatsappMessage(book, settlements);

    return (
        <>
            <Modal title="Edit Book" isOpen={isEditOpen} closeModal={() => setIsEditOpen(false)}>
                <EditBook bookId={book.id} initialName={book.name} initialDescription={book.description} onSuccess={() => setIsEditOpen(false)} />
            </Modal>

            <Modal title="Add Expense" isOpen={isAddExpOpen} closeModal={() => setIsAddExpOpen(false)} >
                <ExpenseForm bookId={book.id} onSuccess={() => setIsAddExpOpen(false)} />
            </Modal>

            <Modal title="Edit Expense" isOpen={!!editingExpense} closeModal={() => setEditingExpense(null)} >
                {editingExpense && (<ExpenseForm bookId={book.id} initialData={editingExpense} onSuccess={() => setEditingExpense(null)} />)}
            </Modal>

            <Modal title="Add Friend" isOpen={isAddFriendOpen} closeModal={() => setIsAddFriendOpen(false)}>
                <FriendForm bookId={book.id} onSuccess={() => setIsAddFriendOpen(false)} />
            </Modal>

            <Modal title="Edit Friend" isOpen={!!editingFriend} closeModal={() => setEditingFriend(null)}>
                {editingFriend && (
                    <FriendForm bookId={book.id} friendId={editingFriend.id} initialName={editingFriend.name} onSuccess={() => setEditingFriend(null)} />)}
            </Modal>

            <div className="flex gap-5 flex-col sm:flex-row justify-between sm:items-center mb-8">
                <div className="group cursor-pointer" onClick={() => setIsEditOpen(true)}>
                    <div className="flex gap-3 items-end ">
                        <h2 className="text-xl md:text-2xl font-bold">{book.name}</h2>
                        <PenLine className="lg:hidden group-hover:block text-neutral-400 mb-1" size={18} />
                    </div>
                    <p className="text-sm md:text-base text-neutral-500">{book.description}</p>
                </div>
                <div className="w-full sm:w-fit">
                    <Button handleClick={() => setIsAddExpOpen(true)} fullWidth>+ Add Expenses</Button>
                </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
                <section className="col-span-2 md:col-span-1 lg:col-span-3">
                    <Tile title="Summary">
                        <div className="grid gap-3 lg:grid-cols-3 w-full">
                            <StatCard color="green" amount={totalExpense} />
                            <StatCard color="blue" type="friend" amount={book.friends.length} />
                            <StatCard color="purple" type="receivable" amount={book.expenses.length} />
                        </div>
                    </Tile>
                </section>

                <section className="col-span-2 md:col-span-1 md:row-span-2 lg:col-span-2">
                    <Tile title="Friends">
                        <div className="mb-5">
                            <Button fullWidth handleClick={() => setIsAddFriendOpen(true)}>
                                + Add Friend
                            </Button>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-3">
                                {book.friends.length === 0 ? (
                                    <p className="text-center text-neutral-500">
                                        No friends added yet
                                    </p>
                                ) : (
                                    book.friends.map(
                                        (friend) => (
                                            <FriendsList
                                                key={friend.id}
                                                friend={friend}
                                                onEdit={() => setEditingFriend(friend)}
                                                onDelete={() => deleteFriend(book.id, friend.id)}
                                            />
                                        )
                                    )
                                )}
                            </div>
                        </div>
                    </Tile>
                </section>

                <section className="col-span-2 md:col-span-1 lg:col-span-3">
                    <Tile title="Expenses">
                        <div className="flex flex-col gap-3">
                            {book.expenses.length === 0 ? (
                                <p className="text-neutral-500 text-center">
                                    No expenses yet
                                </p>
                            ) : (
                                book.expenses.map(
                                    (expense) => {
                                        const paidByName = book.friends.find((friend) => friend.id === expense.paidBy)?.name ?? "Unknown";
                                        return (
                                            <ExpenseList
                                                key={expense.id}
                                                expense={expense}
                                                paidByName={
                                                    paidByName
                                                }
                                                onEdit={() =>
                                                    setEditingExpense(
                                                        expense
                                                    )
                                                }
                                                onDelete={(e) => {
                                                    e.stopPropagation()
                                                    deleteExpense(
                                                        book.id,
                                                        expense.id
                                                    )
                                                }
                                                }
                                            />
                                        );
                                    }
                                )
                            )}
                        </div>
                    </Tile>
                </section>

                <section className="col-span-2 md:col-span-1 lg:col-span-3">
                    <Tile title="Settlement">

                        <div className="flex flex-col gap-3">

                            {balances.map((person) => {

                                const friend =
                                    book.friends.find(
                                        (f) =>
                                            f.id ===
                                            person.friendId
                                    );

                                if (!friend) return null;

                                return (
                                    <SettlementCard
                                        key={friend.id}
                                        name={friend.name}
                                        amount={Math.abs(
                                            person.balance
                                        )}
                                        type={
                                            person.balance >= 0
                                                ? "receive"
                                                : "pay"
                                        }
                                    />
                                );
                            })}

                        </div>

                        <hr className="my-5 border-neutral-200" />

                        <h3 className="font-semibold mb-3">
                            Transactions
                        </h3>

                        <div className="flex flex-col gap-3">
                            {settlements.map(
                                (settlement) => {
                                    const from =
                                        book.friends.find(
                                            (f) =>
                                                f.id ===
                                                settlement.from
                                        );

                                    const to =
                                        book.friends.find(
                                            (f) =>
                                                f.id ===
                                                settlement.to
                                        );

                                    if (!from || !to)
                                        return null;

                                    return (
                                        <TransactionItem
                                            key={`${settlement.from}-${settlement.to}`}
                                            from={from.name}
                                            to={to.name}
                                            amount={
                                                settlement.amount
                                            }
                                        />
                                    );
                                }
                            )}
                        </div>
                    </Tile>
                </section>

                <section className="col-span-2 md:col-span-1 lg:col-span-2">
                    <Tile title="Message">
                        <pre className="whitespace-pre-wrap mb-4 px-4 py-3 bg-emerald-50 rounded border border-emerald-200">
                            {whatsappMessage}
                        </pre>
                        <Button
                            fullWidth
                            handleClick={() => {
                                navigator.clipboard.writeText(whatsappMessage);
                                alert('message copied');
                            }}                        >
                            Copy Message
                        </Button>
                    </Tile>
                </section>
            </div >
        </>
    )
}
