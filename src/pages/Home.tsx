import Button from "../components/Button";
import Tile from "../components/Tile";
import ActionLink from "../components/ActionLink";
import StatCard from "../components/StatCard";
import Modal from "../components/Modal";
import { useState } from "react";
import CreateBook from "../components/CreateBook";

export default function Home() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <>
            <Modal title={"Create new book"} isOpen={isOpen} closeModal={() => setIsOpen(false)}>
                <CreateBook />
            </Modal>

            <div>
                <div className="text-end mb-5">
                    <Button handleClick={() => setIsOpen(true)}>Create New Book</Button>
                </div>
                <div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">

                        <ActionLink href={`/books/123`}>
                            <Tile title={"Weekend Ride"}>
                                <StatCard amount={2500} />
                            </Tile>
                        </ActionLink>
                        <ActionLink href={`/books/124`}>
                            <Tile title={"Hostel Food"}>
                                <StatCard amount={1750} />
                            </Tile>
                        </ActionLink>
                        <ActionLink href={`/books/125`}>
                            <Tile title={"Goa Trip"}>
                                <StatCard amount={5000} />
                            </Tile>
                        </ActionLink>

                    </ul>
                </div>
            </div>
        </>
    )
}
