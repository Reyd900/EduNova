import React from 'react';
import { motion } from 'framer-motion';

const Bead = ({ type, isActive, onClick, value }) => {
  return (
    <motion.div
      className={`bead ${type} ${isActive ? 'active' : ''}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        y: isActive ? (type === 'heaven' ? 10 : -10) : 0,
        boxShadow: isActive 
          ? '0 5px 15px rgba(0, 0, 0, 0.4), 0 0 20px rgba(255, 255, 255, 0.6)'
          : '0 3px 6px rgba(0, 0, 0, 0.3)'
      }}
      transition={{ duration: 0.2 }}
    >
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '10px',
        fontWeight: 'bold',
        color: type === 'heaven' ? '#006400' : '#8b4500',
        textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)'
      }}>
        {isActive && type === 'heaven' ? '5' : isActive && type === 'earth' ? value : ''}
      </div>
    </motion.div>
  );
};

export default Bead;
