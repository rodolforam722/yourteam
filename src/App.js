import soccerField from "./soccerfield.png";
import { FaTshirt } from "react-icons/fa";
import "./App.css";
import { Button } from "./components/button";
import React, { useState } from "react";

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

        <button className="Player1">
          <FaTshirt className="Icon" color="red" />
          Jugador1
        </button>

        <div className="Player2">
          <button>
            <FaTshirt className="Icon" color="red" />
            Jugador2
          </button>
        </div>
        <div className="Player3">
          <button>
            <FaTshirt className="Icon" color="red" />
            Jugador3
          </button>
        </div>
        <div className="Player4">
          <button>
            <FaTshirt className="Icon" color="red" />
            Jugador4
          </button>
        </div>
        <div className="Player5">
          <button>
            <FaTshirt className="Icon" color="red" />
            Jugador5
          </button>
        </div>
        <div className="Player6">
          <button>
            <FaTshirt className="Icon" color="red" />
            Jugador6
          </button>
        </div>
        <div className="Player7">
          <button>
            <FaTshirt className="Icon" color="red" />
            Jugador7
          </button>
        </div>
        <div className="Player8">
          <button>
            <FaTshirt className="Icon" color="red" />
            Jugador8
          </button>
        </div>
        <div className="Player9">
          <button>
            <FaTshirt className="Icon" color="red" />
            Jugador9
          </button>
        </div>
        <div className="Player10">
          <button>
            <FaTshirt className="Icon" color="red" />
            Jugador10
          </button>
        </div>
        <div className="Player11">
          <button>
            <FaTshirt className="Icon" color="red" />
            Jugador11
          </button>
        </div>
        <img className="soccerField" src={soccerField} alt="Soccer Field" />
      </header>
    </div>
  );
}

export default App;
