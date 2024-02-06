import { useState } from "react";

interface Props {
  currentScore: number;
}

export default function Score({ currentScore }: Props) {
  const [highScore, setHighScore] = useState(0);

  if (currentScore > highScore) {
    setHighScore(currentScore);
  }

  return (
    <div className="info">
      <h2>Click on each Pokemon once!</h2>
      <div className="scoreDisplay">
        <h3>Current Score: {currentScore}</h3>
        <h3>High Score: {highScore}</h3>
      </div>
    </div>
  );
}
