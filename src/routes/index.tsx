import { createBrowserRouter } from 'react-router-dom';

import App from '~/App';
import { About, CountriesList, CountryDetail, Home } from '~/screens';

import { ROUTES } from './routes';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: ROUTES.HOME,
                element: <Home />,
            },
            {
                path: ROUTES.COUNTRIES,
                element: <CountriesList />,
            },
            {
                path: ROUTES.COUNTRY_DETAIL,
                element: <CountryDetail />,
            },
            {
                path: ROUTES.ABOUT,
                element: <About />,
            },
        ],
    },
]);
