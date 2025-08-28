import React, { useState } from 'react';
import Bead from './Bead';

const AbacusRod = ({ rodIndex, value, onChange, isHighlighted }) => {
  const [heavenActive, setHeavenActive] = useState(Math.floor(value / 5) > 0);
  const [earthActive, setEarthActive] = useState(value % 5);

  const handleHeavenClick = () => {
    const newHeavenActive = !heavenActive;
    setHeavenActive(newHeavenActive);
    const newValue = (newHeavenActive ? 5 : 0) + earthActive;
    onChange(newValue);
  };

  const handleEarthClick = (beadIndex) => {
    const newEarthActive = beadIndex + 1 === earthActive ? 0 : beadIndex + 1;
    setEarthActive(newEarthActive);
    const newValue = (heavenActive ? 5 : 0) + newEarthActive;
    onChange(newValue);
  };

  React.useEffect(() => {
    setHeavenActive(Math.floor(value / 5) > 0);
    setEarthActive(value % 5);
  }, [value]);

  return (
    <div className={`rod ${isHighlighted ? 'highlighted' : ''}`}>
      <div className="heaven-section">
        <Bead
          type="heaven"
          isActive={heavenActive}
          onClick={handleHeavenClick}
          value={5}
        />
      </div>
      
      <div className="rod-divider" />
      
      <div className="earth-section">
        {[...Array(4)].map((_, index) => (
          <Bead
            key={index}
            type="earth"
            isActive={index < earthActive}
            onClick={() => handleEarthClick(index)}
            value={index + 1}
          />
        ))}
      </div>
    </div>
  );
};

export default AbacusRod;
