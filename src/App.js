import './App.css';

function App() {
  return (
    <main className="pokedex">
      <h1>Exercise 5 - PokeDex!</h1>

      <div className="pokedex-content">
        <section className="pokemon-section">
          <div className="pokemon-image-box">
            Pokemon image
          </div>

          <div className="pokemon-name">Pokemon name</div>

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
