import React from 'react';
import { motion } from 'framer-motion';
import { GAME_MODES } from '../../constants';
import '../../styles/components.css';

const MenuScreen = ({ onModeSelect }) => {
  return (
    <div className="menu-screen">
      <div className="menu-content">
        <motion.div 
          className="abacus-preview"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="abacus-frame">
            {/* Simplified Abacus Preview */}
            <div style={{ width: '200px', height: '150px', position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-around', height: '100%', alignItems: 'center' }}>
                {[...Array(4)].map((_, i) => (
                  <div key={i} style={{ 
                    width: '6px', 
                    height: '120px', 
                    background: 'linear-gradient(180deg, #d4af37, #b8860b)',
                    borderRadius: '3px',
                    position: 'relative'
                  }}>
                    {/* Heaven beads */}
                    <div style={{
                      width: '20px',
                      height: '12px',
                      background: 'linear-gradient(145deg, #32cd32, #228b22)',
                      borderRadius: '50%',
                      position: 'absolute',
                      top: '10px',
                      left: '-7px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
                    }} />
                    {/* Earth beads */}
                    {[...Array(4)].map((_, j) => (
                      <div key={j} style={{
                        width: '20px',
                        height: '12px',
                        background: 'linear-gradient(145deg, #ffd700, #ffa500)',
                        borderRadius: '50%',
                        position: 'absolute',
                        bottom: `${10 + j * 15}px`,
                        left: '-7px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
                      }} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="menu-options">
          <motion.h1 
            className="title"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            EduNova
          </motion.h1>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <motion.button
              className="mode-button free-mode"
              onClick={() => onModeSelect(GAME_MODES.FREE_MODE)}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Free Mode
            </motion.button>
            
            <motion.button
              className="mode-button tutorial"
              onClick={() => onModeSelect(GAME_MODES.TUTORIAL)}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Tutorial
            </motion.button>
            
            <motion.button
              className="mode-button challenge"
              onClick={() => onModeSelect(GAME_MODES.CHALLENGE)}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Challenge
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuScreen;
