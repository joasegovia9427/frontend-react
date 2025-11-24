import { useNavigate } from 'react-router-dom';

import { Button } from '~/components';
import { ROUTES } from '~/routes/routes';

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="flex min-h-[60vh] w-full flex-col items-center justify-center">
            <h1 className="text-primary mb-4 text-5xl font-bold">
                Welcome to My App
            </h1>
            <p className="mb-8 text-xl text-gray-600">
                A modern React boilerplate with TypeScript
            </p>
            <Button
                className="bg-primary text-white"
                onClick={() => navigate(ROUTES.COUNTRIES)}
            >
                View Countries
            </Button>
        </div>
    );
}
