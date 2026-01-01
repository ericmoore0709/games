export default function Building({ name, price, qty }: { name: string, price: number, qty: number }) {
    return (
        <div className="mt-5 border rounded-xl">
            <div>
                <span className="text-lg mx-2">{name}</span>
                <span className="mx-2">-</span>
                <span className="mx-2">{price}</span>
                <span className="text-xs text-gray-300 mx-2">({qty})</span>
            </div>
        </div>
    );
}