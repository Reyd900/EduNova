import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Abacus from '../Abacus/Abacus';

const TutorialScreen = ({ onBack }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [abacusValue, setAbacusValue] = useState(0);

  const tutorialSteps = [
    {
      title: "Welcome to the basic tutorial!",
      description: "Learn how to use the abacus step by step.",
      targetValue: null,
      instruction: "Let's start with the basics. This is your abacus!",
      highlightRod: null
    },
    {
      title: "Understanding the Abacus",
      description: "The abacus has two sections: Heaven (top) and Earth (bottom).",
      targetValue: null,
      instruction: "Each rod represents a decimal place. The rightmost rod is ones, then tens, hundreds, etc.",
      highlightRod: 7
    },
    {
      title: "Heaven Beads (Value: 5)",
      description: "Each heaven bead represents 5 units.",
      targetValue: 5,
      instruction: "Try clicking the heaven bead on the rightmost rod to make 5.",
      highlightRod: 7
    },
    {
      title: "Earth Beads (Value: 1 each)",
      description: "Each earth bead represents 1 unit.",
      targetValue: 3,
      instruction: "Click the earth beads to make 3. Reset first if needed.",
      highlightRod: 7
    },
    {
      title: "Combining Beads",
      description: "You can combine heaven and earth beads.",
      targetValue: 8,
      instruction: "Make 8 using both heaven (5) and earth beads (3).",
      highlightRod: 7
    },
    {
      title: "Multiple Digits",
      description: "Use different rods for different decimal places.",
      targetValue: 23,
      instruction: "Make 23: Use the tens rod (2) and ones rod (3).",
      highlightRod: null
    }
  ];

  const currentTutorialStep = tutorialSteps[currentStep];

  const handleNext = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onBack();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isCorrectValue = currentTutorialStep.targetValue ? 
    abacusValue === currentTutorialStep.targetValue : true;

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      overflow: 'auto'
    }}>
      {/* Header */}
      <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <button className="btn btn-secondary" onClick={onBack}>
          ← Back to Menu
        </button>
        <div style={{
          background: 'rgba(255, 255, 255, 0.2)',
          padding: '10px 20px',
          borderRadius: '15px',
          backdropFilter: 'blur(10px)'
        }}>
          <span style={{ color: 'white', fontSize: '16px', fontWeight: '600' }}>
            Step {currentStep + 1} of {tutorialSteps.length}
          </span>
        </div>
        <div style={{ width: '120px' }} /> {/* Spacer */}
      </div>

      {/* Tutorial Content */}
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        style={{
          textAlign: 'center',
          marginBottom: '30px',
          maxWidth: '800px'
        }}
      >
        <h2 style={{
          fontSize: '32px',
          fontWeight: '700',
          color: 'white',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
          marginBottom: '15px'
        }}>
          {currentTutorialStep.title}
        </h2>
        
        {currentTutorialStep.targetValue && (
          <div style={{
            background: isCorrectValue ? 
              'rgba(34, 197, 94, 0.3)' : 'rgba(239, 68, 68, 0.3)',
            padding: '15px 25px',
            borderRadius: '20px',
            backdropFilter: 'blur(10px)',
            marginBottom: '20px',
            border: `2px solid ${isCorrectValue ? '#22c55e' : '#ef4444'}`
          }}>
            <p style={{
              color: 'white',
              fontSize: '20px',
              fontWeight: '600',
              margin: 0
            }}>
              This represents {currentTutorialStep.targetValue} (={currentTutorialStep.targetValue > 5 ? '5 + ' + (currentTutorialStep.targetValue - 5) : currentTutorialStep.targetValue}).
            </p>
          </div>
        )}
        
        <p style={{
          fontSize: '18px',
          color: 'white',
          opacity: '0.9',
          lineHeight: '1.6',
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
        }}>
          {currentTutorialStep.instruction}
        </p>
      </motion.div>

      {/* Abacus */}
      <Abacus
        targetValue={currentTutorialStep.targetValue}
        onValueChange={setAbacusValue}
        showTarget={!!currentTutorialStep.targetValue}
        tutorialStep={currentTutorialStep}
      />

      {/* Navigation */}
      <div style={{
        display: 'flex',
        gap: '20px',
        marginTop: '30px',
        alignItems: 'center'
      }}>
        <button 
          className="btn btn-secondary" 
          onClick={handlePrev}
          disabled={currentStep === 0}
          style={{
            opacity: currentStep === 0 ? 0.5 : 1,
            cursor: currentStep === 0 ? 'not-allowed' : 'pointer'
          }}
        >
          Previous
        </button>
        
        {currentTutorialStep.targetValue && !isCorrectValue && (
          <div style={{
            background: 'rgba(239, 68, 68, 0.2)',
            padding: '8px 16px',
            borderRadius: '15px',
            backdropFilter: 'blur(10px)'
          }}>
            <span style={{ color: 'white', fontSize: '14px' }}>
              Try to match the target value!
            </span>
          </div>
        )}
        
        {currentTutorialStep.targetValue && isCorrectValue && (
          <div style={{
            background: 'rgba(34, 197, 94, 0.3)',
            padding: '8px 16px',
            borderRadius: '15px',
            backdropFilter: 'blur(10px)'
          }}>
            <span style={{ color: 'white', fontSize: '14px' }}>
              Perfect! ✓
            </span>
          </div>
        )}
        
        <button 
          className="btn" 
          onClick={handleNext}
          disabled={currentTutorialStep.targetValue && !isCorrectValue}
          style={{
            opacity: (currentTutorialStep.targetValue && !isCorrectValue) ? 0.5 : 1,
            cursor: (currentTutorialStep.targetValue && !isCorrectValue) ? 'not-allowed' : 'pointer'
          }}
        >
          {currentStep === tutorialSteps.length - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default TutorialScreen;
