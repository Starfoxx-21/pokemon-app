import './App.css';
import { useState, useEffect } from 'react';

const pokemonURL = "https://pokeapi.co/api/v2/pokemon/"

function App() {
  const [currentPokemon, setCurrentPokemon] = useState();
  const [currentPokemonIndex, setCurrentPokemonIndex] = useState(1);

  function increasePokemonIndex() {
    const newIndex = currentPokemonIndex + 1;
    setCurrentPokemonIndex(newIndex);
  }

  function decreasePokemonIndex() {
    if (currentPokemonIndex > 1) {
      const newIndex = currentPokemonIndex - 1;
      setCurrentPokemonIndex(newIndex);
    }
  }

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(`${pokemonURL}${currentPokemonIndex}`);
      const data = await response.json();
      setCurrentPokemon(data);
      console.log(data);
    }
    fetchPokemon();
  }, [currentPokemonIndex])

  return (
    <div className="App">
      <h1>{currentPokemon?.name}</h1>
      <img src={currentPokemon?.sprites.front_default} width={150}></img>
      <br />
      <button onClick={decreasePokemonIndex}>Prev</button>
      <button onClick={increasePokemonIndex}>Next</button>
    </div>
  );
}

export default App;
