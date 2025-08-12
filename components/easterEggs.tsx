"use client";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import KonamiCodeEasterEgg from './konamiCodeEasterEgg';
import MatrixEffect from './matrixEffect';
import CharlieRotationEasterEgg from './charlieRotationEasterEgg';


// Utility to determine if a color is light or dark
function getContrastYIQ(hexcolor: string) {
  let c = hexcolor.replace('#', '');
  if (c.length === 3) c = c[0]+c[0]+c[1]+c[1]+c[2]+c[2];
  const r = parseInt(c.substr(0,2),16);
  const g = parseInt(c.substr(2,2),16);
  const b = parseInt(c.substr(4,2),16);
  const yiq = ((r*299)+(g*587)+(b*114))/1000;
  return yiq >= 128 ? '#222' : '#fff';
}

const DvdBounceOverlay = ({ onReload }: { onReload: () => void }) => {
  const [pos, setPos] = useState({ x: 100, y: 100 });
  const [vel, setVel] = useState({ x: 2.5, y: 2 });
  const [color, setColor] = useState('#fff');

  useEffect(() => {
    let raf: number;
    const boxW = 60, boxH = 40;
    const move = () => {
      const winW = window.innerWidth, winH = window.innerHeight;
      setPos(prev => {
        const { x, y } = prev;
        let { x: dx, y: dy } = vel;
        let hit = false;
        if (x + dx < 0 || x + dx + boxW > winW) { dx = -dx; hit = true; }
        if (y + dy < 0 || y + dy + boxH > winH) { dy = -dy; hit = true; }
        if (hit) setColor(`#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`);
        setVel({ x: dx, y: dy });
        return { x: x + dx, y: y + dy };
      });
      raf = requestAnimationFrame(move);
    };
    raf = requestAnimationFrame(move);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line
  }, [vel.x, vel.y]);

  if (typeof window === 'undefined') return null;
  return ReactDOM.createPortal(
    <div
      style={{
        position: 'fixed',
        left: 0, top: 0, width: '100vw', height: '100vh',
        zIndex: 99999,
        pointerEvents: 'auto',
        background: 'rgba(0,0,0,0.15)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: pos.x, top: pos.y,
          transition: 'background 0.2s',
          background: color,
          borderRadius: 12,
          boxShadow: '0 2px 12px #0008',
          padding: 16,
          userSelect: 'none',
          minWidth: 120,
          minHeight: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            color: getContrastYIQ(color),
            letterSpacing: 1,
          }}
        >
          the page has melted 🫠
        </span>
      </div>
    </div>,
    document.body
  );
};

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
  animation: melt 64s linear forwards;
}
`;

export default function EasterEggs() {
  const [showMatrix, setShowMatrix] = useState(false);

  const [melting, setMelting] = useState(false);
  const [showDvd, setShowDvd] = useState(false);

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

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setMelting(true);
  //     setTimeout(() => setShowDvd(true), 366400); // Show DVD after melt anim
  //   }, 360000);
  //   return () => clearTimeout(timer);
  // }, []);

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
        (window as Window & typeof globalThis & { clipboardData?: { setData: (format: string, data: string) => void } }).clipboardData?.setData('Text', text);
      }
    };
    document.addEventListener('copy', handleCopy);
    return () => {
      document.removeEventListener('copy', handleCopy);
    };
  }, []);

  // useEffect(() => {
  //   const main = typeof window !== 'undefined' ? document.getElementById('main-content') : null;
  //   if (melting && main) {
  //     main.classList.add('melting-page');
  //   } else if (main) {
  //     main.classList.remove('melting-page');
  //   }
  //   return () => {
  //     if (main) main.classList.remove('melting-page');
  //   };
  // }, [melting]);

  return (
    <>
      {/* <style>{meltingStyle}</style> */}
      <KonamiCodeEasterEgg onActivate={handleKonamiActivation} />
      <CharlieRotationEasterEgg />
      <MatrixEffect isActive={showMatrix} />
      {/* {showDvd && <DvdBounceOverlay onReload={() => window.location.reload()} />} */}
    </>
  );
}
