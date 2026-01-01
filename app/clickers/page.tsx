import Link from "next/link";

export default function Page() {
    return (
        <div>
            <h1>Clickers</h1>
            <p>Is it <em>just</em> Cookie Clicker? Maybe!</p>
            <ul className="underline">
                <li><Link href={"clickers/1"}>Game 1</Link></li>
            </ul>
        </div>
    )
}