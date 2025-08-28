export const calculateRodValue = (heavenActive, earthActive) => {
  return (heavenActive ? 5 : 0) + earthActive;
};

export const calculateTotalValue = (rodValues) => {
  return rodValues.reduce((total, value, index) => {
    const placeValue = Math.pow(10, rodValues.length - 1 - index);
    return total + (value * placeValue);
  }, 0);
};

export const numberToRodValues = (number, totalRods = 8) => {
  const str = number.toString().padStart(totalRods, '0');
  return str.split('').map(digit => parseInt(digit));
};

export const generateRandomChallenge = (level) => {
  const maxValue = Math.min(level * 50, 999999);
  const minValue = Math.max(1, (level - 1) * 20);
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
};
