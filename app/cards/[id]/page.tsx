import CardGame1 from "../(card-games)/CardGame1";

export default async function CardGame({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    return (
        <div>
            <h1>(Card) Game: {id}</h1>
            <CardGame1 />
        </div>
    );
}