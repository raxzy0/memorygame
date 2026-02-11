import { useState, useEffect} from 'react'
import './App.css'
import Card from './Card'
import getData from './getData'

function App() {
  const [count, setCount] = useState(0)
  const [highscore, setHighscore] = useState(0)
  const [clickedCards, setClickedCards] = useState([])
  const [list, setList] = useState([])
  const [cards, setCards] = useState([])

  useEffect(() => {
    async function fetchData() {
      const data = await getData()
      setList(data)
      setCards(data)
    }
    fetchData()
  }, [])
  
  console.log(list)
  function randomise(cards) {
    let currentIndex = cards.length
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      [cards[currentIndex], cards[randomIndex]] = [cards[randomIndex], cards[currentIndex]]
    }
    setCards(cards)
  }

  let listCards = cards.map(item => 
    <Card key = {item.id} id= {item.id} name={item.name} count = {count} onCountChange = {setCount} clickedCards = {clickedCards} setClickedCards = {setClickedCards} randomise = {randomise} cards = {cards}/>)


  if (count > highscore) {
    setHighscore(count)
  }
  
  return (
    <>
      <p>You are on {count} points</p>
      <p>Highscore: {highscore}</p>
      <div className = 'container'>
        {listCards}
      </div>
    </>
  )
}

export default App
