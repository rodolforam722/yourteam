import soccerField from "./soccerfield.png";
import "./App.css";

function App() {
  // const players = [
  //   { name: "defensa", x: "100", y: "100" },
  //   { name: "portero", x: "20", y: "0" },
  // ];
  return (
    <div className="App">
      <header className="App-header">
        {/* {players.map((player) => {
          return (
            <div className="Player1" style={{ top: player.y, right: player.x }}>
              <button>{player.name}</button>
            </div>
          );
        })} */}

        <div className="Player1">
          <button>Jugador1</button>
        </div>

        <div className="Player2">
          <button>Jugador2</button>
        </div>
        <div className="Player3">
          <button>Jugador3</button>
        </div>
        <div className="Player4">
          <button>Jugador4</button>
        </div>
        <div className="Player5">
          <button>Jugador5</button>
        </div>
        <div className="Player6">
          <button>Jugador6</button>
        </div>
        <div className="Player7">
          <button>Jugador7</button>
        </div>
        <div className="Player8">
          <button>Jugador8</button>
        </div>
        <div className="Player9">
          <button>Jugador9</button>
        </div>
        <div className="Player10">
          <button>Jugador10</button>
        </div>
        <div className="Player11">
          <button>Jugador11</button>
        </div>
        <img className="soccerField" src={soccerField} alt="Soccer Field" />
      </header>
    </div>
  );
}

export default App;
