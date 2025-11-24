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
            <div className="flex items-center justify-center min-h-[60vh]">
                <p className="text-xl text-gray-600">Loading countries...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <p className="text-xl text-red-600">Error: {error}</p>
            </div>
        );
    }

    return (
        <div>
            <h1 className="text-4xl font-bold text-primary mb-6">Countries</h1>
            <p className="text-gray-600 mb-6">
                {countries.length} countries found
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {countries.map(country => (
                    <Link
                        key={country.id}
                        to={ROUTES.COUNTRY_DETAIL.replace(':id', country.id)}
                        className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow border border-neutral"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            {country.flag && (
                                <span className="text-3xl">{country.flag}</span>
                            )}
                            <h2 className="text-2xl font-bold text-primary">
                                {country.name}
                            </h2>
                        </div>
                        <p className="text-gray-600 text-sm mb-1">
                            Code: {country.code}
                        </p>
                        {country.capital && (
                            <p className="text-gray-600 text-sm mb-1">
                                Capital: {country.capital}
                            </p>
                        )}
                        <p className="text-gray-600 text-sm">
                            Population: {country.population.toLocaleString()}
                        </p>
                        <p className="text-gray-500 text-xs mt-2">
                            {country.region}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
