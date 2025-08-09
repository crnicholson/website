"use client";

import { useEffect, useRef, useState } from 'react';

interface MatrixEffectProps {
  isActive?: boolean;
}

export default function MatrixEffect({ isActive = false }: MatrixEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    const matrixActivated = localStorage.getItem('matrixActivated');
    if (matrixActivated === 'true' || isActive) {
      setShouldShow(true);
    }
  }, [isActive]);

  useEffect(() => {
    if (!shouldShow || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const matrixChars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.font = `${fontSize}px monospace`;

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0f0';

      for (let i = 0; i < drops.length; i++) {
        const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 35);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [shouldShow]);

  const activate = () => {
    setShouldShow(true);
    localStorage.setItem('matrixActivated', 'true');
  };

  if (!shouldShow) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9999] pointer-events-none"
      style={{
        background: 'black',
        pointerEvents: 'none'
      }}
    />
  );
}

export const activateMatrix = () => {
  const event = new CustomEvent('activateMatrix');
  window.dispatchEvent(event);
};
