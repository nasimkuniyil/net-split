import {  PenLine, UserRoundPlus } from "lucide-react";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { useState } from "react";
import AddExpense from "../components/AddExpense";
import Tile from "../components/Tile";
import StatCard from "../components/StatCard";

export default function BookDetails() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (

        <>

            <Modal title={"Add Expense"} isOpen={isOpen} closeModal={() => setIsOpen(false)}>
                <AddExpense />
            </Modal>
            <div>
                <section className="flex gap-5 flex-col sm:flex-row justify-between mb-8">
                    <div className="group cursor-pointer">
                        <div className="flex gap-3 items-end ">
                            <h2 className="text-2xl font-bold">Weekend Ride</h2>
                            <PenLine className="lg:hidden group-hover:block text-neutral-400 mb-1" size={18} />
                        </div>
                        <p className="text-neutral-500">Something about this expense book.</p>
                    </div>
                    <div className="flex items-center gap-5 w-full sm:w-fit">
                        <Button handleClick={() => setIsOpen(true)} fullWidth>+ Add Expenses</Button>
                        <Button outline><UserRoundPlus /></Button>
                    </div>
                </section>

                <section className="grid">
                    <Tile title="Summary">
                        <div className="grid gap-3 sm:grid-cols-2">
                            <StatCard color="green" amount={1500} />
                            <StatCard color="blue" type="friend" amount={4} />
                        </div>
                    </Tile>
                </section>
            </div>
        </>
    )
}
