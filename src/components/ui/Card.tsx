import React, { ComponentPropsWithoutRef } from 'react';
import { twMerge as tw } from 'tailwind-merge';

//TODO:: migrate to React Compound Component with Tailwind variants with slots to have better control over the styling.

export function Card({
    title = '',
    innerFilter,
    children,
    className,
    ...props
}: Readonly<
    ComponentPropsWithoutRef<'div'> & {
        title?: string;
        innerFilter?: React.ReactNode;
    }
>) {
    return (
        <div
            className={tw(
                'rounded-2xl border-2 border-black/15 bg-white px-6 py-4',
                className
            )}
            {...props}
        >
            <div className="flex items-center justify-between">
                {title && (
                    <h3 className="mb-3.5 text-lg font-medium text-black">
                        {title}
                    </h3>
                )}
                {innerFilter}
            </div>
            {children}
        </div>
    );
}
