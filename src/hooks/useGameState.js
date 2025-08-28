import { useState, useEffect } from 'react';

export const useGameState = () => {
  const [gameMode, setGameMode] = useState(null);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isGameActive, setIsGameActive] = useState(false);

  const startGame = (mode, duration = 60) => {
    setGameMode(mode);
    setScore(0);
    setLevel(1);
    setTimeRemaining(duration);
    setIsGameActive(true);
  };

  const endGame = () => {
    setIsGameActive(false);
    setTimeRemaining(0);
  };

  const addScore = (points) => {
    setScore(prev => prev + points);
    // Level up every 100 points
    if ((score + points) % 100 === 0) {
      setLevel(prev => prev + 1);
    }
  };

  useEffect(() => {
    let timer;
    if (isGameActive && timeRemaining > 0) {
      timer = setTimeout(() => {
        setTimeRemaining(prev => prev - 1);
      }, 1000);
    } else if (timeRemaining === 0 && isGameActive) {
      endGame();
    }
    return () => clearTimeout(timer);
  }, [isGameActive, timeRemaining]);

  return {
    gameMode,
    score,
    level,
    timeRemaining,
    isGameActive,
    startGame,
    endGame,
    addScore
  };
};

