import React, { useState } from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = useState(50);

  const handleAumentar = () => {
    setProgress(prev => Math.min(prev + 10, 100));
  };

  const handleDiminuir = () => {
    setProgress(prev => Math.max(prev - 10, 0));
  };

  return (
    <div className="progress-wrapper">
      <h3>Progresso</h3>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="progress-buttons">
        <button onClick={handleDiminuir}>Diminuir</button>
        <button onClick={handleAumentar}>Aumentar</button>
      </div>
    </div>
  );
};

export default ProgressBar;
