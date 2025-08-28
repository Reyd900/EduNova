import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MenuScreen from './components/UI/MenuScreen';
import TutorialScreen from './components/UI/TutorialScreen';
import GameScreen from './components/UI/GameScreen';
import LoadingScreen from './components/UI/LoadingScreen';
import { GAME_MODES } from './constants';

function App() {
  const [currentMode, setCurrentMode] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleModeSelect = (mode) => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentMode(mode);
      setIsLoading(false);
    }, 1500);
  };

  const handleBackToMenu = () => {
    setCurrentMode(null);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/" 
            element={
              currentMode === null ? (
                <MenuScreen onModeSelect={handleModeSelect} />
              ) : currentMode === GAME_MODES.TUTORIAL ? (
                <TutorialScreen onBack={handleBackToMenu} />
              ) : (
                <GameScreen mode={currentMode} onBack={handleBackToMenu} />
              )
            } 
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
