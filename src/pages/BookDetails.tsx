import { PenLine } from "lucide-react";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { useState } from "react";
import AddExpense from "../components/AddExpense";
import Tile from "../components/Tile";
import StatCard from "../components/StatCard";
import ExpenseList from "../components/ExpenseList";
import FriendsList from "../components/FriendsList";
import { useParams } from "react-router";
import { useExpenseStore } from "../store/expenseStore";
import EditBook from "../components/EditBook";

export default function BookDetails() {
    const [isAddExpOpen, setIsAddExpOpen] = useState<boolean>(false);
    const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
    const { id } = useParams<{ id: string }>();
    const book = useExpenseStore((state) => state.books.find((book) => book.id === id));

    if (!book) {
        return <div className="p-8 text-center text-neutral-500">Expense book not found.</div>;
    }

    const totalExpense = book.expenses.reduce((n, ex) => n + ex.amount, 0)

    return (
        <>
            <Modal title="Edit Book" isOpen={isEditOpen} closeModal={() => setIsEditOpen(false)}>
                <EditBook bookId={book.id} initialName={book.name} initialDescription={book.description} onSuccess={() => setIsEditOpen(false)} />
            </Modal>
            <Modal title={"Add Expense"} isOpen={isAddExpOpen} closeModal={() => setIsAddExpOpen(false)}>
                <AddExpense />
            </Modal>
            <div className="flex gap-5 flex-col sm:flex-row justify-between sm:items-center mb-8">
                <div className="group cursor-pointer" onClick={() => setIsEditOpen(true)}>
                    <div className="flex gap-3 items-end ">
                        <h2 className="text-2xl font-bold">{book.name}</h2>
                        <PenLine className="lg:hidden group-hover:block text-neutral-400 mb-1" size={18} />
                    </div>
                    <p className="text-neutral-500">{book.description}</p>
                </div>
                <div className="w-full sm:w-fit">
                    <Button handleClick={() => setIsAddExpOpen(true)} fullWidth>+ Add Expenses</Button>
                </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                <section className="grid lg:col-span-2">
                    <Tile title="Summary">
                        <div className="grid gap-3 lg:grid-cols-3 w-full">
                            <StatCard color="green" amount={totalExpense} />
                            <StatCard color="blue" type="friend" amount={book.friends.length} />
                            <StatCard color="purple" type="receivable" amount={0} />
                        </div>
                    </Tile>
                </section>

                <section className="grid lg:col-span-1 row-span-2">
                    <Tile title="Friends">
                        <div className="flex gap-3 mb-5">
                            <input type="text" placeholder="Friend's name" className="w-full border border-neutral-300 px-3 py-2 rounded focus:outline-1 focus:outline-emerald-500 placeholder:text-neutral-400" />
                            <Button>+ Add</Button>
                        </div>
                        <div className="flex flex-col gap-3">
                            <FriendsList />
                            <FriendsList />
                            <FriendsList />
                        </div>
                    </Tile>
                </section>

                <section className="grid lg:col-span-2">
                    <Tile title="Expenses">
                        <div className="flex flex-col gap-3">
                            <ExpenseList />
                            <ExpenseList />
                            <ExpenseList />
                            <ExpenseList />
                        </div>
                    </Tile>
                </section>


            </div>
        </>
    )
}
