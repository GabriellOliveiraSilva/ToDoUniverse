// store.js
import { create } from 'zustand';

export const navBarIsOpen = create((set) => ({
    isOpen: false,
    setIsOpen: (open) => set ({isOpen: open})
}));

export const deviceIsMoile = create((set) => ({
    isMobile: false,
    setIsMobile: (mobile) => set ({isMobile: mobile})
}));

