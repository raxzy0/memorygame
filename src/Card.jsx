
import './Card.css'

function Card({ id, name, count, onCountChange, clickedCards, setClickedCards, randomise, cards}) {

    function handleClick() {
        if (clickedCards.includes(id)) {
            onCountChange(0)
            setClickedCards([])
            randomise(cards)
        }
        else {
            onCountChange(count + 1)
            setClickedCards([...clickedCards, id])
        }
    }

    return(
        <button onClick = {handleClick}>
            <img src = "null"></img>
            <p>{name} {id} </p>
        </button>
    )
}

export default Card