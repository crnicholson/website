"use client";
import { useEffect, useState } from "react";

import KonamiCodeEasterEgg from './konamiCodeEasterEgg';
import MatrixEffect from './matrixEffect';
import CharlieRotationEasterEgg from './charlieRotationEasterEgg';

const meltingStyle = `
@keyframes melt {
  0% { filter: none; transform: none; }
  20% { filter: blur(1px); }
  40% { filter: blur(2px) brightness(0.98); }
  60% { filter: blur(4px) brightness(0.95); transform: skewY(2deg) scaleY(1.02); }
  80% { filter: blur(8px) brightness(0.92); transform: skewY(6deg) scaleY(1.08) translateY(10px); }
  100% { filter: blur(16px) brightness(0.9); transform: skewY(12deg) scaleY(1.15) translateY(100px); opacity: 0.7; }
}
.melting-page {
  animation: melt 16s linear forwards;
}
`;

export default function EasterEggs() {
  const [showMatrix, setShowMatrix] = useState(false);

  const [melting, setMelting] = useState(false);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setMelting(true);
    }, 216000);
    return () => clearTimeout(timer);
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
        (window as any).clipboardData.setData('Text', text);
      }
    };
    document.addEventListener('copy', handleCopy);
    return () => {
      document.removeEventListener('copy', handleCopy);
    };
  }, []);

  return (
    <>
  {/* Melting effect styles */}
  <style>{meltingStyle}</style>
  {/* Apply melting class to the page wrapper when melting is true */}
  {melting && typeof window !== 'undefined' && document?.body && document.body.parentElement && document.body.parentElement.classList.add('melting-page')}
      <KonamiCodeEasterEgg onActivate={handleKonamiActivation} />
      <CharlieRotationEasterEgg />
      <MatrixEffect isActive={showMatrix} />
    </>
  );
}
