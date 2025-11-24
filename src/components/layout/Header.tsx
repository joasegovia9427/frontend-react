import { Link } from 'react-router-dom';

import { ROUTES } from '~/routes/routes';

export default function Header() {
    return (
        <header className="bg-primary text-white shadow-lg">
            <nav className="container mx-auto flex items-center justify-between p-4">
                <Link to={ROUTES.HOME} className="text-2xl font-bold ">
                    FrontEnd React App
                </Link>
                <div className="flex gap-6">
                    <Link
                        to={ROUTES.HOME}
                        className="hover:text-secondary transition-colors"
                    >
                        Home
                    </Link>
                    <Link
                        to={ROUTES.COUNTRIES}
                        className="hover:text-secondary transition-colors"
                    >
                        Countries
                    </Link>
                    <Link
                        to={ROUTES.ABOUT}
                        className="hover:text-secondary transition-colors"
                    >
                        About
                    </Link>
                </div>
            </nav>
        </header>
    );
}
