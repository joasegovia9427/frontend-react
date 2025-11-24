import { useNavigate } from 'react-router-dom';

import { Button } from '~/components';
import { ROUTES } from '~/routes/routes';

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] w-full">
            <h1 className="text-5xl font-bold text-primary mb-4">
                Welcome to My App
            </h1>
            <p className="text-xl text-gray-600 mb-8">
                A modern React boilerplate with TypeScript
            </p>
            <Button
                className="text-white bg-primary"
                onClick={() => navigate(ROUTES.COUNTRIES)}
            >
                View Countries
            </Button>
        </div>
    );
}
