'use client'

import Card from "./Card"

export default function CardGame1() {
    return (
        <div>
            <div id="mouse-follower" className="w-[50px] h-[50px] border" hidden></div>
            <div id="deck-tray">
                <div id="center-deck">
                    <Card text={"Center Deck"}/>
                </div>
            </div>
            <div id="play-tray"></div>
            <div id="hand">

            </div>
        </div>
    );
}