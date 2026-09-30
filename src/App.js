import {useEffect} from 'react';
import {useState} from 'react';
import './App.css';

const typeColors = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD'
};


function App() {
  const [pokemon, setPokemon] = useState(null);
  const [pokemonId, setPokemonId] = useState(1);
  const [activeTab, setActiveTab] = useState('Moves');
  const [error, setError] = useState('');


  useEffect(function () {
    async function loadPokemon() {
      setPokemon(null);
      setError('');

      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonId + '/');
        if (!response.ok) {
          throw new Error('Could not load the Pokemon');
        }
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        setError(error.message);
      }
      
    }
    loadPokemon();
  }, [pokemonId]);

  function showPrevious() {
    if (pokemonId > 1) {
      setPokemonId(pokemonId - 1);
    }
  }

  function showNext() {
    setPokemonId(pokemonId + 1);
  }






  return (
    <main className="pokedex">
      <h1>Bits of Good Mid-Semester Project</h1>

      <div className="pokedex-content">
        <section className="pokemon-section">
          <div className="pokemon-image-box">
            {pokemon && (
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            )}
          </div>

          <div className="pokemon-name">
            {pokemon ? pokemon.name : error || 'Loading...'}
          </div>

          <p className="types-label">Types:</p>

          <div className="type-badges">
            {pokemon && pokemon.types.map(function (item) {
              return (
                <div className="type-badge" key={item.type.name} style={{backgroundColor: typeColors[item.type.name] }}>
                  {item.type.name}
                </div>
            );
          })}
        </div>
          

          <div className="arrow-buttons">
            <button onClick={showPrevious} disabled={pokemonId === 1 || (!pokemon && !error)}>
              ❮
            </button>

            <button onClick={showNext} disabled ={!pokemon}>
              ❯
            </button>



          </div>



        </section>

        <section className="details-section">
          <h2>{activeTab}</h2>

          
          <div className="details-box">
            {error && <p>{error}</p>}

            {!error && !pokemon && <p>Loading...</p>}

            {pokemon && activeTab === 'Info' && (
              <div className="info-list">
                <p>Height: {pokemon.height / 10} m</p>
                <p>Weight: {pokemon.weight / 10} kg</p>

                <h3>Stats</h3>

                {pokemon.stats.map(function (item) {
                  return (
                    <p key={item.stat.name}>
                      {item.stat.name}: {item.base_stat}
                    </p>
                  );
                })}
              </div>
            )}

            {pokemon && activeTab === 'Moves' && (
              <ul className="moves-list">
                {pokemon.moves.map(function (item) {
                  return (
                    <li key={item.move.name}>{item.move.name}</li>
                  );
                })}
              </ul>
            )}
          </div>
          


          <div className="tab-buttons">
            <button
              className={activeTab === 'Info' ? 'active' : ''}
              onClick={function () {
                setActiveTab('Info');
              }}
            >
              Info
            </button>

            <button
              className={activeTab === 'Moves' ? 'active' : ''}
              onClick={function () {
                setActiveTab('Moves');
              }}
            >
              Moves
            </button>
          </div>
        </section>
      </div>


    </main>
  );
  
}



export default App;
