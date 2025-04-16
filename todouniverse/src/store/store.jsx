// store.js
import { create } from 'zustand';

export const navBarIsOpen = create((set) => ({
    isOpen: false,
    setIsOpen: (open) => set ({isOpen: open})
}));
