import Button from "../components/Button";
import Tile from "../components/Tile";
import ActionLink from "../components/ActionLink";
import StatCard from "../components/StatCard";
import Modal from "../components/Modal";
import { useState } from "react";
import CreateBook from "../components/CreateBook";
import { useExpenseStore } from "../store/expenseStore";

export default function Home() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { getAllBooks } = useExpenseStore();
    return (
        <>
            <Modal title={"Create new book"} isOpen={isOpen} closeModal={() => setIsOpen(false)}>
                <CreateBook onSuccess={() => setIsOpen(false)} />
            </Modal>

            <div>
                <div className="text-end mb-5">
                    <Button handleClick={() => setIsOpen(true)}>Create New Book</Button>
                </div>
                <div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">

                        {
                            getAllBooks()?.map(b => (
                                <ActionLink key={b.id} href={`/books/${b.id}`}>
                                    <Tile title={b.name}>
                                        <StatCard amount={b.totalExpense} />
                                    </Tile>
                                </ActionLink>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}
