"use client";

export const clearMatrixEffect = () => {
    localStorage.removeItem('matrixActivated');
    window.location.reload();
};

export const checkMatrixStatus = () => {
    return localStorage.getItem('matrixActivated') === 'true';
};

if (typeof window !== 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).easterEggUtils = {
        clearMatrix: clearMatrixEffect,
        checkMatrix: checkMatrixStatus,
    };
}
