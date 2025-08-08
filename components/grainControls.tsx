"use client";

import { useState, useEffect } from "react";

export default function GrainControls() {
    const [isOpen, setIsOpen] = useState(false);
    const [grainSettings, setGrainSettings] = useState({
        opacity: 0.5,
        frequency: 0.45,
        randomness: 5,
        size: 230,
        color: "#AC732B"
    });

    useEffect(() => {
        // Update CSS custom properties when settings change
        const root = document.documentElement;
        root.style.setProperty('--grain-opacity', grainSettings.opacity.toString());
        root.style.setProperty('--grain-frequency', grainSettings.frequency.toString());
        root.style.setProperty('--grain-randomness', grainSettings.randomness.toString());
        root.style.setProperty('--grain-size', `${grainSettings.size}px`);

        // Convert hex color to RGB for the SVG
        const hex = grainSettings.color.replace('#', '');
        const r = parseInt(hex.substr(0, 2), 16);
        const g = parseInt(hex.substr(2, 2), 16);
        const b = parseInt(hex.substr(4, 2), 16);
        root.style.setProperty('--grain-color', `${r},${g},${b}`);

        // Calculate inverse color for button
        const invR = 255 - r;
        const invG = 255 - g;
        const invB = 255 - b;
        root.style.setProperty('--grain-inverse-color', `rgb(${invR},${invG},${invB})`);

        // Update the SVG background
        const svgData = `data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='${grainSettings.frequency}' numOctaves='${grainSettings.randomness}' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1 0 0 0 ${r / 255} 0 1 0 0 ${g / 255} 0 0 1 0 ${b / 255} 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.8'/%3E%3C/svg%3E`;
        root.style.setProperty('--grain-svg', `url("${svgData}")`);

        // Create inverse grain SVG for button
        const inverseSvgData = `data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='inverseNoiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='${grainSettings.frequency}' numOctaves='${grainSettings.randomness}' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1 0 0 0 ${invR / 255} 0 1 0 0 ${invG / 255} 0 0 1 0 ${invB / 255} 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23inverseNoiseFilter)' opacity='1'/%3E%3C/svg%3E`;
        root.style.setProperty('--grain-inverse-svg', `url("${inverseSvgData}")`);
    }, [grainSettings]);

    const handleSettingChange = (key: keyof typeof grainSettings, value: number | string) => {
        setGrainSettings(prev => ({
            ...prev,
            [key]: value
        }));
    };

    return (
        <>
            {/* Control Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-4 left-4 w-12 h-12 rounded-full shadow-lg transition-all duration-200 z-50 group grain-button"
                title="Grain Controls"
                style={{
                    backgroundImage: 'var(--grain-inverse-svg)',
                    backgroundSize: `${grainSettings.size / 5}px`,
                    backgroundColor: 'var(--grain-inverse-color)',
                }}
            >
            </button>

            {/* Control Panel */}
            {isOpen && (
                <div className="fixed bottom-20 left-4 bg-card-bg border border-border rounded-lg p-4 shadow-xl z-50 min-w-64">
                    {/* <h3 className="text-primary font-tiempos-bold text-lg mb-4">Grain Controls</h3> */}

                    {/* Opacity */}
                    <div className="mb-4">
                        <label className="block text-primary text-sm mb-2 font-tiempos-light">
                            {(grainSettings.opacity * 100).toFixed(0)}
                        </label>
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.05"
                            value={grainSettings.opacity}
                            onChange={(e) => handleSettingChange('opacity', parseFloat(e.target.value))}
                            className="w-full grain-slider"
                        />
                    </div>

                    {/* Frequency */}
                    <div className="mb-4">
                        <label className="block text-primary text-sm mb-2 font-tiempos-light">
                            {grainSettings.frequency.toFixed(2)}
                        </label>
                        <input
                            type="range"
                            min="0.1"
                            max="2"
                            step="0.05"
                            value={grainSettings.frequency}
                            onChange={(e) => handleSettingChange('frequency', parseFloat(e.target.value))}
                            className="w-full grain-slider frequency-slider"
                        />
                    </div>

                    {/* Randomness */}
                    <div className="mb-4">
                        <label className="block text-primary text-sm mb-2 font-tiempos-light">
                            {grainSettings.randomness}
                        </label>
                        <input
                            type="range"
                            min="1"
                            max="6"
                            step="1"
                            value={grainSettings.randomness}
                            onChange={(e) => handleSettingChange('randomness', parseInt(e.target.value))}
                            className="w-full grain-slider randomness-slider"
                        />
                    </div>

                    {/* Size */}
                    <div className="mb-4">
                        <label className="block text-primary text-sm mb-2 font-tiempos-light">
                            {grainSettings.size}
                        </label>
                        <input
                            type="range"
                            min="50"
                            max="400"
                            step="10"
                            value={grainSettings.size}
                            onChange={(e) => handleSettingChange('size', parseInt(e.target.value))}
                            className="w-full grain-slider size-slider"
                        />
                    </div>

                    {/*
                    Color
                    <div className="mb-4">
                        <label className="block text-primary text-sm mb-2 font-tiempos-light">
                            Color
                        </label>
                        <input
                            type="color"
                            value={grainSettings.color}
                            onChange={(e) => handleSettingChange('color', e.target.value)}
                            className="grain-color-input"
                        />
                    </div> */}

                    {/* Reset Button
                    <button
                        onClick={() => setGrainSettings({
                            opacity: 0.4,
                            frequency: 0.85,
                            randomness: 3,
                            size: 150,
                            color: "#57534e"
                        })}
                        className="w-full bg-accent hover:bg-primary text-bg py-2 px-4 rounded transition-colors"
                    >
                        Reset to Default
                    </button> */}
                </div>
            )}
        </>
    );
}
