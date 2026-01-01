'use client'
export default function Cookie({addCookies}: {addCookies: () => void}) {

    function handleClick(e: any) {
        e.preventDefault();
        addCookies();
    }

    return (
        <div className="w-50 h-50 border rounded-full mt-5 shadow-xl hover:-translate-y-2 hover:scale-105 active:bg-blue-200 active:scale-95" onClick={handleClick}>

        </div>
    );
}