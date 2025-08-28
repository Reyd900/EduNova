import { useState, useEffect } from 'react';
import { ABACUS_CONFIG } from '../constants';

export const useAbacus = () => {
  const [rodValues, setRodValues] = useState(new Array(ABACUS_CONFIG.RODS).fill(0));
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    const total = rodValues.reduce((sum, value, index) => {
      return sum + (value * Math.pow(10, ABACUS_CONFIG.RODS - 1 - index));
    }, 0);
    setTotalValue(total);
  }, [rodValues]);

  const updateRod = (rodIndex, newValue) => {
    if (newValue >= 0 && newValue <= 9) {
      const newRodValues = [...rodValues];
      newRodValues[rodIndex] = newValue;
      setRodValues(newRodValues);
    }
  };

  const resetAbacus = () => {
    setRodValues(new Array(ABACUS_CONFIG.RODS).fill(0));
  };

  const setValueFromNumber = (number) => {
    const str = number.toString().padStart(ABACUS_CONFIG.RODS, '0');
    const newValues = str.split('').map(digit => parseInt(digit));
    setRodValues(newValues);
  };

  return {
    rodValues,
    totalValue,
    updateRod,
    resetAbacus,
    setValueFromNumber
  };
};

