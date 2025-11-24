import { EyeIcon } from '@heroicons/react/20/solid';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '~/routes/routes';
import { countriesApi, transformCountryToList } from '~/services/countries';
import type { CountryListItem } from '~/services/countries/types';

export default function CountriesList() {
    const [countries, setCountries] = useState<CountryListItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await countriesApi.getAll();
                const transformed = data.map(transformCountryToList);
                setCountries(transformed);
            } catch (err) {
                setError(
                    err instanceof Error
                        ? err.message
                        : 'Failed to load countries'
                );
            } finally {
                setLoading(false);
            }
        };

        fetchCountries();
    }, []);

    if (loading) {
        return (
            <div className="flex min-h-[60vh] items-center justify-center">
                <p className="text-xl text-gray-600">Loading countries...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex min-h-[60vh] items-center justify-center">
                <p className="text-xl text-red-600">Error: {error}</p>
            </div>
        );
    }

    return (
        <div>
            <h1>Countries</h1>
            <p>{countries.length} countries found</p>
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {countries.map(country => (
                    <li
                        key={country.id}
                        className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow-sm"
                    >
                        <div className="flex w-full items-center justify-between p-6 pb-0">
                            <div className="flex-1 space-y-3 truncate">
                                <div className="flex items-center justify-between space-x-3">
                                    <h3 className="truncate text-sm font-medium text-gray-900">
                                        {country.name}
                                    </h3>
                                    <span className="inline-flex shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset">
                                        {country.region}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="">
                                        <p className="truncate text-sm">
                                            {`Capital: ${country.capital || 'No capital'}`}
                                            <br />
                                            {country.population.toLocaleString()}{' '}
                                            people
                                        </p>
                                    </div>
                                    {country.flag && (
                                        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gray-50 text-2xl outline-1 -outline-offset-1 outline-black/5">
                                            {country.flag}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="flex divide-x divide-gray-200">
                            <div className="flex w-0 flex-1">
                                <Link
                                    to={ROUTES.COUNTRY_DETAIL.replace(
                                        ':id',
                                        country.id
                                    )}
                                    className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    <EyeIcon
                                        aria-hidden="true"
                                        className="size-5 text-gray-400"
                                    />
                                    View
                                </Link>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
