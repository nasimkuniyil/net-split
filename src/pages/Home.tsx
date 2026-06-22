import { Trash2 } from "lucide-react";
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
    const books = useExpenseStore((state) => state.books).sort(
        (a, b) => {
            const aLast =
                a.expenses.at(-1)
                    ?.createdAt ??
                a.createdAt;

            const bLast =
                b.expenses.at(-1)
                    ?.createdAt ??
                b.createdAt;

            return (
                new Date(bLast).getTime() -
                new Date(aLast).getTime()
            );
        }
    );

    const deleteBook = useExpenseStore((state) => state.deleteBook);

    return (
        <>
            <Modal title={"Create new book"} isOpen={isOpen} closeModal={() => setIsOpen(false)}>
                <CreateBook onSuccess={() => setIsOpen(false)} />
            </Modal>

            {
                books.length === 0 && (
                    <Tile title="No Expense Books">
                        <div className="text-center py-8">
                            <p className="text-neutral-500 mb-4">
                                Create your first expense book to get started.
                            </p>

                            <Button
                                handleClick={() =>
                                    setIsOpen(true)
                                }
                            >
                                Create First Book
                            </Button>
                        </div>
                    </Tile>
                )
            }

            <div>
                <div className="text-end mb-5">
                    <Button handleClick={() => setIsOpen(true)}>Create New Book</Button>
                </div>
                <div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">

                        {
                            books?.map(b => (
                                <div
                                    key={b.id}
                                    className="group"
                                >

                                    <ActionLink href={`/books/${b.id}`}>
                                        <Tile title={b.name}>
                                            <StatCard amount={b.expenses.reduce((sum, expense) => sum + expense.amount, 0)} />
                                            <br />
                                            <Button
                                                fullWidth
                                                handleClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();

                                                    deleteBook(b.id);
                                                }}
                                            >
                                                Delete
                                            </Button>
                                        </Tile>
                                    </ActionLink>
                                </div>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}
