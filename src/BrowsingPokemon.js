import DefaultButton from './DefaultButton';

function BrowsingPokemon({currentPokemonIndex, setCurrentPokemonIndex}) {

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

  return (
    <>
      <DefaultButton onClick={decreasePokemonIndex} buttonText={"Prev"} />
      <DefaultButton onClick={increasePokemonIndex} buttonText={"Next"} />
    </>
  );
}

export default BrowsingPokemon;
