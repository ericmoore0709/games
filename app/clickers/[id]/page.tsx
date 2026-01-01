import Game from "./Game";

export default async function ClickerGame({params}: {params: Promise<{id: string}>}) {
    const {id} = await params;
    
    return (
        <div>
            <h1>(Clicker) Game: {id}</h1>
            <Game />
        </div>
    );
}