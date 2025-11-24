import React from 'react';

import { tw } from '~/utils/tw';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'accent' | 'transparent';
    children: React.ReactNode;
}

export default function Button({
    variant = 'primary',
    children,
    className = '',
    ...props
}: ButtonProps) {
    const baseStyles = 'px-4 py-2 rounded-lg font-medium transition-colors';

    const variants = {
        primary: 'bg-primary text-white hover:bg-accent',
        secondary: 'bg-secondary text-white hover:bg-secondary-accent',
        accent: 'bg-accent text-white hover:bg-primary',
        transparent: 'bg-transparent text-black hover:bg-gray-50',
    };

    return (
        <button
            className={tw(baseStyles, variants[variant], className)}
            {...props}
        >
            {children}
        </button>
    );
}
