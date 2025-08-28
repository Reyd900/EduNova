import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Abacus from '../Abacus/Abacus';
import { GAME_MODES } from '../../constants';

const GameScreen = ({ mode, onBack }) => {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [currentChallenge, setCurrentChallenge] = useState(null);
  const [userAnswer, setUserAnswer] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameActive, setGameActive] = useState(false);
  const [feedback, setFeedback] = useState('');

  // Generate random challenge based on level
  const generateChallenge = () => {
    const maxValue = Math.min(level * 50, 500);
    const challenge = Math.floor(Math.random() * maxValue) + 1;
    setCurrentChallenge(challenge);
    setFeedback('');
  };

  // Start game
  const startGame = () => {
    setGameActive(true);
    setScore(0);
    setLevel(1);
    setTimeLeft(60);
    generateChallenge();
  };

  // Check answer
  const checkAnswer = () => {
    if (userAnswer === currentChallenge) {
      setScore(score + (level * 10));
      setFeedback('Correct! Well done!');
      setTimeout(() => {
        if (score > 0 && (score + level * 10) % 100 === 0) {
          setLevel(level + 1);
        }
        generateChallenge();
      }, 1500);
    } else {
      setFeedback(`Incorrect. The answer was ${currentChallenge}. Try the next one!`);
      setTimeout(() => generateChallenge(), 2000);
    }
  };

  // Timer effect
  useEffect(() => {
    let timer;
    if (gameActive && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0) {
      setGameActive(false);
    }
    return () => clearTimeout(timer);
  }, [gameActive, timeLeft]);

  const getBackgroundGradient = () => {
    switch (mode) {
      case GAME_MODES.CHALLENGE:
        return 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)';
      case GAME_MODES.FREE_MODE:
        return 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
      default:
        return 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)';
    }
  };

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      background: getBackgroundGradient(),
      display: 'flex',
      flexDirection: 'column',
      padding: '20px',
      overflow: 'auto'
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <button className="btn btn-secondary" onClick={onBack}>
          ← Back to Menu
        </button>
        
        <div style={{
          display: 'flex',
          gap: '20px',
          alignItems: 'center'
        }}>
          {mode === GAME_MODES.CHALLENGE && (
            <>
              <div className="stat-item">Score: {score}</div>
              <div className="stat-item">Level: {level}</div>
              <div className="stat-item">Time: {timeLeft}s</div>
            </>
          )}
        </div>
      </div>

      {/* Game Content */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1
      }}>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            fontSize: '36px',
            fontWeight: '700',
            color: 'white',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            marginBottom: '20px'
          }}
        >
          {mode === GAME_MODES.FREE_MODE ? 'Free Mode' : 'Challenge Mode'}
        </motion.h1>

        {mode === GAME_MODES.FREE_MODE && (
          <p style={{
            fontSize: '18px',
            color: 'white',
            opacity: '0.9',
            textAlign: 'center',
            marginBottom: '30px'
          }}>
            Practice freely with the abacus. Experiment and learn at your own pace!
          </p>
        )}

        {mode === GAME_MODES.CHALLENGE && !gameActive && (
          <div style={{
            textAlign: 'center',
            background: 'rgba(255, 255, 255, 0.2)',
            padding: '40px',
            borderRadius: '20px',
            backdropFilter: 'blur(10px)',
            marginBottom: '30px'
          }}>
            <h2 style={{ color: 'white', marginBottom: '20px' }}>
              Ready for the Challenge?
            </h2>
            <p style={{ color: 'white', opacity: '0.9', marginBottom: '30px' }}>
              Set the abacus to match the given numbers as quickly as possible!
            </p>
            <button className="btn" onClick={startGame}>
              Start Challenge
            </button>
          </div>
        )}

        {mode === GAME_MODES.CHALLENGE && gameActive && currentChallenge && (
          <div style={{
            textAlign: 'center',
            background: 'rgba(255, 255, 255, 0.2)',
            padding: '30px',
            borderRadius: '20px',
            backdropFilter: 'blur(10px)',
            marginBottom: '30px'
          }}>
            <h2 style={{ color: 'white', marginBottom: '10px' }}>
              Set your abacus to: {currentChallenge}
            </h2>
            {feedback && (
              <p style={{
                color: feedback.includes('Correct') ? '#22c55e' : '#ef4444',
                fontSize: '18px',
                fontWeight: '600',
                marginTop: '15px'
              }}>
                {feedback}
              </p>
            )}
          </div>
        )}

        {/* Abacus */}
        <Abacus
          targetValue={mode === GAME_MODES.CHALLENGE ? currentChallenge : null}
          onValueChange={setUserAnswer}
          showTarget={mode === GAME_MODES.CHALLENGE && gameActive}
        />

        {mode === GAME_MODES.CHALLENGE && gameActive && !feedback && (
          <button 
            className="btn"
            onClick={checkAnswer}
            style={{ marginTop: '20px' }}
          >
            Submit Answer
          </button>
        )}

        {mode === GAME_MODES.CHALLENGE && !gameActive && timeLeft === 0 && (
          <div style={{
            textAlign: 'center',
            background: 'rgba(255, 255, 255, 0.2)',
            padding: '40px',
            borderRadius: '20px',
            backdropFilter: 'blur(10px)',
            marginTop: '30px'
          }}>
            <h2 style={{ color: 'white', marginBottom: '20px' }}>
              Game Over!
            </h2>
            <p style={{ color: 'white', opacity: '0.9', marginBottom: '10px' }}>
              Final Score: {score}
            </p>
            <p style={{ color: 'white', opacity: '0.9', marginBottom: '30px' }}>
              Level Reached: {level}
            </p>
            <button className="btn" onClick={startGame}>
              Play Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameScreen;
