import React, { useState, useEffect } from 'react';
import AbacusRod from './AbacusRod';
import { ABACUS_CONFIG } from '../../constants';
import '../../styles/abacus.css';

const Abacus = ({ targetValue, onValueChange, showTarget = false, tutorialStep = null }) => {
  const [rodValues, setRodValues] = useState(new Array(ABACUS_CONFIG.RODS).fill(0));
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    const total = rodValues.reduce((sum, value, index) => {
      return sum + (value * Math.pow(10, ABACUS_CONFIG.RODS - 1 - index));
    }, 0);
    setTotalValue(total);
    if (onValueChange) {
      onValueChange(total);
    }
  }, [rodValues, onValueChange]);

  const handleRodChange = (rodIndex, newValue) => {
    const newRodValues = [...rodValues];
    newRodValues[rodIndex] = newValue;
    setRodValues(newRodValues);
  };

  const resetAbacus = () => {
    setRodValues(new Array(ABACUS_CONFIG.RODS).fill(0));
  };

  return (
    <div className="abacus-container">
      {showTarget && targetValue && (
        <div style={{
          background: 'rgba(255, 255, 255, 0.2)',
          padding: '10px 20px',
          borderRadius: '15px',
          marginBottom: '20px',
          backdropFilter: 'blur(10px)'
        }}>
          <p style={{ color: 'white', fontSize: '18px', fontWeight: '600' }}>
            Target: {targetValue}
          </p>
        </div>
      )}
      
      <div className="abacus-frame-game">
        <div className="abacus-rods">
          {rodValues.map((value, index) => (
            <AbacusRod
              key={index}
              rodIndex={index}
              value={value}
              onChange={(newValue) => handleRodChange(index, newValue)}
              isHighlighted={tutorialStep && tutorialStep.highlightRod === index}
            />
          ))}
        </div>
        
        <div className="rod-values">
          {rodValues.map((value, index) => (
            <div key={index} className="rod-value">
              {value}
            </div>
          ))}
        </div>
        
        <div className="value-display">
          Total: {totalValue}
        </div>
      </div>
      
      <button 
        className="btn btn-secondary btn-small" 
        onClick={resetAbacus}
        style={{ marginTop: '15px' }}
      >
        Reset Abacus
      </button>
    </div>
  );
};

export default Abacus;
