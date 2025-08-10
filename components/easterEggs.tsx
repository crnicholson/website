"use client";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    const handleCopy = (e: ClipboardEvent) => {
      const selection = window.getSelection();
      if (!selection) return;
      let text = selection.toString();
      text = text.replace(/charlie|charles|c\.n\.|c\.n|cn|c n|c\s*n/gi, ':)');
      e.preventDefault();
      if (e.clipboardData) {
        e.clipboardData.setData('text/plain', text);
      } else if (window && 'clipboardData' in window) {
        window.clipboardData.setData('Text', text);
      }
    };
    document.addEventListener('copy', handleCopy);
    return () => {
      document.removeEventListener('copy', handleCopy);
    };
  }, []);

  return (
    <>
      <KonamiCodeEasterEgg onActivate={handleKonamiActivation} />
      <CharlieRotationEasterEgg />
      <MatrixEffect isActive={showMatrix} />
    </>
  );
}
