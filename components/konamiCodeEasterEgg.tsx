"use client";

import { useEffect, useState } from 'react';

interface KonamiCodeEasterEggProps {
    onActivate: () => void;
}

const KONAMI_CODE = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

export default function KonamiCodeEasterEgg({ onActivate }: KonamiCodeEasterEggProps) {
    const [inputSequence, setInputSequence] = useState<string[]>([]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            setInputSequence(prev => {
                const newSequence = [...prev, event.code];

                if (newSequence.length > KONAMI_CODE.length) {
                    newSequence.shift();
                }

                if (newSequence.length === KONAMI_CODE.length) {
                    const matches = newSequence.every((key, index) => key === KONAMI_CODE[index]);
                    if (matches) {
                        onActivate();
                        return [];
                    }
                }

                return newSequence;
            });
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onActivate]);

    return null;
}
