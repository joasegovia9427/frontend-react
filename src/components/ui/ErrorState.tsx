import { AlertCircleIcon, RefreshCwIcon } from 'lucide-react';

import { Card } from '~/components/ui/Card';

interface ErrorStateProps {
    title?: string;
    message?: string;
    onRetry?: () => void;
}

export function ErrorState({
    title = 'Something went wrong',
    message = 'Failed to load data. Please try again.',
    onRetry,
}: Readonly<ErrorStateProps>) {
    return (
        <Card className="flex min-h-[40vh] w-full items-center justify-center p-8">
            <div className="flex flex-col items-center text-center">
                <AlertCircleIcon className="mb-4 h-12 w-12 text-red-500" />
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    {title}
                </h3>
                <p className="mb-4 text-sm text-gray-600">{message}</p>
                {onRetry && (
                    <button
                        onClick={onRetry}
                        className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                    >
                        <RefreshCwIcon className="h-4 w-4" />
                        Try Again
                    </button>
                )}
            </div>
        </Card>
    );
}

export function FilterErrorState({
    onRetry,
}: Readonly<{ onRetry?: () => void }>) {
    return (
        <ErrorState
            title="Failed to load filters"
            message="Unable to load filters. Please refresh the page."
            onRetry={onRetry}
        />
    );
}
