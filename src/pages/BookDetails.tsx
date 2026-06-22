import { PenLine } from "lucide-react";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { useState } from "react";
import AddExpense from "../components/AddExpense";
import Tile from "../components/Tile";
import StatCard from "../components/StatCard";
import ExpenseList from "../components/ExpenseList";
import FriendsList from "../components/FriendsList";

export default function BookDetails() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (

        <>

            <Modal title={"Add Expense"} isOpen={isOpen} closeModal={() => setIsOpen(false)}>
                <AddExpense />
            </Modal>
            <div className="flex gap-5 flex-col sm:flex-row justify-between sm:items-center mb-8">
                <div className="group cursor-pointer">
                    <div className="flex gap-3 items-end ">
                        <h2 className="text-2xl font-bold">Weekend Ride</h2>
                        <PenLine className="lg:hidden group-hover:block text-neutral-400 mb-1" size={18} />
                    </div>
                    <p className="text-neutral-500">Something about this expense book.</p>
                </div>
                <div className="w-full sm:w-fit">
                    <Button handleClick={() => setIsOpen(true)} fullWidth>+ Add Expenses</Button>
                </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                <section className="grid lg:col-span-2">
                    <Tile title="Summary">
                        <div className="grid gap-3 lg:grid-cols-3 w-full">
                            <StatCard color="green" amount={1500} />
                            <StatCard color="blue" type="friend" amount={4} />
                            <StatCard color="purple" type="receivable" amount={1500} />
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
