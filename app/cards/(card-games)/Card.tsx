export default function Card({ text, centered = false }: { text: string, centered?: boolean }) {
    
    let classNames = "w-[110px] h-[170px] border rounded-lg mx-auto p-2 cursor-pointer hover:-translate-y-2 hover:shadow-lg/ select-none"
    if (centered) classNames += " text-center";

    return (
        <div className={classNames}>{text}</div>
    );
}