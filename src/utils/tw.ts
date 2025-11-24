import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge Tailwind CSS classes
 * Handles conflicts by intelligently merging classes
 */
export function tw(...inputs: (string | undefined | null | false)[]): string {
    return twMerge(...inputs.filter(Boolean));
}
