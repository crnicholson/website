"use client";

import { useEffect, useState } from 'react';

export default function CharlieRotationEasterEgg() {
  const [inputBuffer, setInputBuffer] = useState('');
  const [isRotated, setIsRotated] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key.length === 1 && event.key.match(/[a-zA-Z]/)) {
        setInputBuffer(prev => {
          const newBuffer = (prev + event.key.toLowerCase()).slice(-7);
          
          if (newBuffer.includes('charlie')) {
            setIsRotated(true);
            
            const nameElement = document.querySelector('h1');
            if (nameElement && nameElement.textContent?.includes('charlie nicholson')) {
              nameElement.style.transform = 'rotate(180deg)';
              nameElement.style.transition = 'transform 0.5s ease-in-out';
              nameElement.style.transformOrigin = 'center';
            }
            
            setTimeout(() => {
              setIsRotated(false);
              if (nameElement) {
                nameElement.style.transform = 'rotate(0deg)';
              }
            }, 3000);
            
            return '';
          }
          
          return newBuffer;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null;
}
