import Button from "../components/Button";
import Tile from "../components/Tile";
import ActionLink from "../components/ActionLink";
import StatCard from "../components/StatCard";

export default function Home() {
    return (
        <div>
            <div className="text-end mb-5">
                <Button>Create New Book</Button>
            </div>
            <div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">

                    <ActionLink href={`/expense-books/`}>
                        <Tile title={"Weekend Ride"}>
                            <StatCard amount={2500} />
                        </Tile>
                    </ActionLink>
                    <ActionLink href={`/expense-books/`}>
                        <Tile title={"Hostel Food"}>
                            <StatCard amount={1750} />
                        </Tile>
                    </ActionLink>
                    <ActionLink href={`/expense-books/`}>
                        <Tile title={"Goa Trip"}>
                            <StatCard amount={5000} />
                        </Tile>
                    </ActionLink>

                </ul>
            </div>
        </div>
    )
}
