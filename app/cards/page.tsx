import Link from "next/link";

export default function Cards() {
    return (
        <div>
            <h1>Cards</h1>
            <p>Card games that I felt like making.</p>
            <ul className="underline">
                <li><Link href={"/cards/1"}>Game 1</Link></li>
            </ul>
        </div>
    );
}