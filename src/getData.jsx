
async function getData() {
    const pokeList = []
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=151'
    const response = await fetch(url)
    const data = await response.json()
    const pokemon = data.results
    for (let i = 0; i < 10; i++) {
        pokemon[i].id = i
        pokeList.push(pokemon[i])
    }
    return pokeList
}

export default getData