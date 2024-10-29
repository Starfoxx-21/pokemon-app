// function DisplayPokemon(aaaaaaaaaaaaaaaaz) (shera)
function DisplayPokemon({pokemon}) {

    return (
        <div>
            <h1>{pokemon?.name}</h1>
            <img src={pokemon?.sprites.front_default} width={150}></img>
        </div>
    );
}

export default DisplayPokemon;