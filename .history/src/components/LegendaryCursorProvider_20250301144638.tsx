'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import LegendaryCursor from './LegendaryCursor';

interface LegendaryCursorContextType {
    isEnabled: boolean;
    enable: () => void;
    disable: () => void;
    toggle: () => void;
}

const LegendaryCursorContext = createContext<LegendaryCursorContextType | null>(null);

export function useLegendaryCursor() {
    const context = useContext(LegendaryCursorContext);
    if (!context) {
        throw new Error('useLegendaryCursor must be used within a LegendaryCursorProvider');
    }
    return context;
}

interface Props {
    children: ReactNode;
    initialEnabled?: boolean;
}

export default function LegendaryCursorProvider({ children, initialEnabled = true }: Props) {
    const [isEnabled, setIsEnabled] = useState(initialEnabled);

    const value = {
        isEnabled,
        enable: () => setIsEnabled(true),
        disable: () => setIsEnabled(false),
        toggle: () => setIsEnabled(prev => !prev),
    };

    return (
        <LegendaryCursorContext.Provider value={value}>
            {children}
            {isEnabled && <LegendaryCursor />}
        </LegendaryCursorContext.Provider>
    );
} 