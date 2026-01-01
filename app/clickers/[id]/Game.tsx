'use client'

import { useState } from "react";
import Cookie from "./(game-components)/Cookie";
import Building from "./(game-components)/Building";

export default function Game() {
    
    const [cookies, setCookies] = useState(0);
    const [cookiesOnClick, setCookiesOnClick] = useState(1);

    function addClickedCookies () {
        setCookies((prev) => prev + cookiesOnClick);
    }
    
    return (
        <div className="mx-5">
            <div id="cookie-count-display" className="mt-5">Cookies: {cookies}</div>
            <Cookie addCookies={addClickedCookies} />
            <div id="buildings-list-container" className="mt-5">
                <Building name={"Cursor"} price={10} qty={0} />
            </div>
        </div>
    );
}