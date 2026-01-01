import Link from "next/link";

export default function Navbar() {
    return (
        <div className="bg-green-500 flex items-baseline">
            <div id="logo-container" className="text-xl"><Link href={"/"}>Games</Link></div>
            <div id="navlink-list-container">
                <ul className="ms-5 text-sm hover:underline">
                    <li><Link href={"/cards"}>Cards</Link></li>
                </ul>
            </div>
        </div>
    );
}