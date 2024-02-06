//import { useState } from "react";

interface Props {
  currentScore: number;
  highScore: number;
  //startOver: () => void;
}

export default function Score({ currentScore, highScore }: Props) {
  // const [gameEnd, setGameEnd] = useState(false);
  // if (currentScore === 12) setGameEnd(!gameEnd);

  return (
    <>
      <div>
        <p>Current Score: {currentScore}</p>
        <p>High Score: {highScore}</p>
      </div>
      {/* {gameEnd && (
        <div>
          <h2>You got all {currentScore} points!</h2>
          <button onClick={startOver}>Start Over?</button>
        </div>
      )} */}
    </>
  );
}
