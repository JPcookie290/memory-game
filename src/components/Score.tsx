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
    <>
      <div>
        <p>Current Score: {currentScore}</p>
        <p>High Score: {highScore}</p>
      </div>
    </>
  );
}
