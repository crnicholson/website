"use client";

import { useEffect, useState } from 'react';
import KonamiCodeEasterEgg from './konamiCodeEasterEgg';
import MatrixEffect from './matrixEffect';
import CharlieRotationEasterEgg from './charlieRotationEasterEgg';

export default function EasterEggs() {
  const [showMatrix, setShowMatrix] = useState(false);

  useEffect(() => {
    const matrixActivated = localStorage.getItem('matrixActivated');
    if (matrixActivated === 'true') {
      setShowMatrix(true);
    }

    const handleMatrixActivation = () => {
      setShowMatrix(true);
      localStorage.setItem('matrixActivated', 'true');
    };

    window.addEventListener('activateMatrix', handleMatrixActivation);
    
    return () => {
      window.removeEventListener('activateMatrix', handleMatrixActivation);
    };
  }, []);

  const handleKonamiActivation = () => {
    setShowMatrix(true);
    localStorage.setItem('matrixActivated', 'true');
  };

  return (
    <>
      <KonamiCodeEasterEgg onActivate={handleKonamiActivation} />
      <CharlieRotationEasterEgg />
      <MatrixEffect isActive={showMatrix} />
    </>
  );
}
