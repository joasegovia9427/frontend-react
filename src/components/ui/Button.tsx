import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'accent';
    children: React.ReactNode;
}

export default function Button({
    variant = 'primary',
    children,
    className = '',
    ...props
}: ButtonProps) {
    const baseStyles = 'px-4 py-2 rounded-lg font-medium transition-colors ';

    const variants = {
        primary: 'bg-primary text-white hover:bg-accent',
        secondary: 'bg-secondary text-white hover:bg-secondary-accent',
        accent: 'bg-accent text-white hover:bg-primary',
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
