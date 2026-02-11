import { useState, useEffect} from 'react'
import './App.css'
import Card from './Card'


function App() {
  const [count, setCount] = useState(0)
  const [highscore, setHighscore] = useState(0)
  const [clickedCards, setClickedCards] = useState([])
  const list = [
    {id: 1, name: "Dog"},
    {id: 2, name: "Pig"},
    {id: 3, name: "Cat" },
    {id: 4, name: "Faa"}
  ]
  const [cards, setCards] = useState(list)

  function randomise(cards) {
    let currentIndex = cards.length
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      [cards[currentIndex], cards[randomIndex]] = [cards[randomIndex], cards[currentIndex]]
    }
    setCards(cards)
  }
  console.log(cards)
  let listCards = cards.map(item => 
    <Card key = {item.id} id= {item.id} name={item.name} count = {count} onCountChange = {setCount} clickedCards = {clickedCards} setClickedCards = {setClickedCards} randomise = {randomise} cards = {cards}/>)
  console.log(listCards)

  if (count > highscore) {
    setHighscore(count)
  }
  
  return (
    <>
      <p>You are on {count} points</p>
      <p>Highscore: {highscore}</p>
      <div>
        {listCards}
      </div>
    </>
  )
}

export default App
