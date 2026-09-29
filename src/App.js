import {useEffect} from 'react';
import {useState} from 'react';
import './App.css';


function App() {
  const [pokemon, setPokemon] = useState(null);
  useEffect(function () {
    async function loadPokemon() {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/1/');
        if (!response.ok) {
          throw new Error('Could not load the Pokemon');
        }
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error(error);
      }
      
    }
    loadPokemon();
  }, []);  




  return (
    <main className="pokedex">
      <h1>Exercise 5 - PokeDex!</h1>

      <div className="pokedex-content">
        <section className="pokemon-section">
          <div className="pokemon-image-box">
            {pokemon && (
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            )}
          </div>

          <div className="pokemon-name">
            {pokemon ? pokemon.name : 'Loading...'}
          </div>

          <p className="types-label">Types:</p>
          <div className="type-badge">type</div>

          <div className="arrow-buttons">
            <button>❮</button>
            <button>❯</button>
          </div>



        </section>

        <section className="details-section">
          <h2>Moves</h2>
          <div className="details-box">transform</div>

          <div className="tab-buttons">
            <button>Info</button>
            <button className="active">Moves</button>

          </div>
        </section>
      </div>


    </main>
  );
  
}



export default App;
