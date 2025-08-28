import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="spinner"></div>
      <h2 style={{ fontSize: '24px', fontWeight: '600', opacity: '0.9' }}>
        Loading EduNova...
      </h2>
      <p style={{ fontSize: '16px', opacity: '0.7', marginTop: '10px' }}>
        Preparing your learning experience
      </p>
    </div>
  );
};

export default LoadingScreen;
