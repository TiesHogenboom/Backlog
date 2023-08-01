import "./Display.css";
import { useSelector } from "react-redux";
const Display = () => {

    const filteredGames = useSelector(state => {return state});

    let firstToBeRendered = false;

    const titlesToBeRendered = filteredGames.map(game => {
        if(firstToBeRendered === false){
            firstToBeRendered = true;
            return( <section key={game.title} className="display">
            <h2>{game.title}</h2>
            <figure className="display__play">Play This!</figure>
            </section>);
        }
        return( <section key={game.title} className="display">
            <h2>{game.title}</h2>
            </section>);
    })

    return (
        <>
            {titlesToBeRendered}
        </>
    )
    
}

export default Display;