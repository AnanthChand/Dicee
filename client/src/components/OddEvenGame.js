import React from "react";
import { useState } from "react";
import score0 from "./assets/score-0.gif";
import score1 from "./assets/score-1.gif";
import score2 from "./assets/score-2.gif";
import score3 from "./assets/score-3.gif";
import score4 from "./assets/score-4.gif";
import score5 from "./assets/score-5.gif";
import score6 from "./assets/score-6.gif";

export default function OddEvenGame() {
  const [playerChoice, setPlayerChoice] = useState("odd");
  const [playerNumber, setPlayerNumber] = useState(0);
  const [computerNumber, setComputerNumber] = useState(0);
  const [result, setResult] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const computerNumber = Math.floor(Math.random() * 7);
    setComputerNumber(computerNumber);
    const sum = playerNumber + computerNumber;
    const isEven = sum % 2 === 0;
    const playerWins =
      (playerChoice === "even" && isEven) ||
      (playerChoice === "odd" && !isEven);
    setResult(playerWins ? "You win!" : "You lose!");
  }
  let image = null;

  if (playerNumber === 0) {
    image = <img src={score0} alt="Image 0" style={{height:'200px', width:'200px'}}/>;
  } else if (playerNumber === 1) {
    image = <img src={score1} alt="Image 1"  style={{height:'200px', width:'200px'}}/>;
  } else if (playerNumber === 2) {
    image = <img src={score2} alt="Image 2"  style={{height:'200px', width:'200px'}}/>;
  } else if (playerNumber === 3) {
    image = <img src={score3} alt="Image 3"  style={{height:'200px', width:'200px'}}/>;
  } else if (playerNumber === 4) {
    image = <img src={score4} alt="Image 4"  style={{height:'200px', width:'200px'}}/>;
  } else if (playerNumber === 5) {
    image = <img src={score5} alt="Image 5"  style={{height:'200px', width:'200px'}}/>;
  } else if (playerNumber === 6) {
    image = <img src={score6} alt="Image 6"  style={{height:'200px', width:'200px'}}/>;
  }

  return (
    <div>
      <h1>Odd or Even Game</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Choose odd or even:
          <select
            value={playerChoice}
            onChange={(event) => setPlayerChoice(event.target.value)}
          >
            <option value="odd">Odd</option>
            <option value="even">Even</option>
          </select>
        </label>
        <br />
        <label>
          Your number (0-6):
          <input
            type="number"
            min="0"
            max="6"
            value={playerNumber}
            onChange={(event) =>
              setPlayerNumber(parseInt(event.target.value, 10))
            }
          />
          {image}
        </label>
        <br />
        <label>
          Computer's number (0-6):
          <input
            type="number"
            min="0"
            max="6"
            readOnly
            value={computerNumber}
          />
        </label>
        <br />
        <button type="submit">Play</button>
      </form>
      <div>{result}</div>
    </div>
  );
}