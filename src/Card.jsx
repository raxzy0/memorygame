
import './Card.css'

function Card({ id, name, count, onCountChange, clickedCards, setClickedCards, randomise, cards}) {

    function handleClick() {
        if (clickedCards.includes(id)) {
            onCountChange(0)
            setClickedCards([])
        }
        else {
            onCountChange(count + 1)
            setClickedCards([...clickedCards, id])
        }
        randomise(cards)
    }

    return(
        <button className = 'btn' onClick = {handleClick}>
            <img src = "null"></img>
            <p>{name}</p>
        </button>
    )
}

export default Card