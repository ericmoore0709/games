'use client'
export default function CardGame1() {
    return (
        <div>
            <div id="mouse-follower" className="w-[50px] h-[50px] border" hidden></div>
            <div id="deck-tray">
                <div id="center-deck" className="w-[110px] h-[170px] border rounded-lg mx-auto bg-black text-white p-2 cursor-pointer hover:-translate-y-2 hover:shadow-lg/ select-none">Center Deck</div>
            </div>
        </div>
    );
}