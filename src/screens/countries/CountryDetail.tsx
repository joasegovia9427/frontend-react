import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Button } from '~/components';
import { countriesApi } from '~/services/countries';
import type { Country } from '~/services/countries/types';

export default function CountryDetail() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [country, setCountry] = useState<Country | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCountry = async () => {
            if (!id) return;

            try {
                setLoading(true);
                setError(null);
                const data = await countriesApi.getByCode(id);
                setCountry(data);
            } catch (err) {
                setError(
                    err instanceof Error
                        ? err.message
                        : 'Failed to load country'
                );
            } finally {
                setLoading(false);
            }
        };

        fetchCountry();
    }, [id]);

    if (loading) {
        return (
            <div className="max-w-2xl mx-auto">
                <Button onClick={() => navigate(-1)} className="mb-4">
                    ← Back
                </Button>
                <p className="text-xl text-gray-600">
                    Loading country details...
                </p>
            </div>
        );
    }

    if (error || !country) {
        return (
            <div className="max-w-2xl mx-auto">
                <Button onClick={() => navigate(-1)} className="mb-4">
                    ← Back
                </Button>
                <p className="text-xl text-red-600">
                    {error || 'Country not found'}
                </p>
            </div>
        );
    }

    const currencies = country.currencies
        ? Object.entries(country.currencies).map(([code, currency]) => ({
              code,
              ...currency,
          }))
        : [];

    const languages = country.languages ? Object.values(country.languages) : [];

    return (
        <div className="max-w-2xl mx-auto">
            <Button onClick={() => navigate(-1)} className="mb-6">
                ← Back
            </Button>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-neutral">
                <div className="flex items-center gap-4 mb-6">
                    {country.flag ? (
                        <span className="text-6xl">{country.flag}</span>
                    ) : country.flags?.svg ? (
                        <img
                            src={country.flags.svg}
                            alt={country.flags.alt || country.name.common}
                            className="w-20 h-20 object-contain"
                        />
                    ) : null}
                    <div>
                        <h1 className="text-4xl font-bold text-primary mb-2">
                            {country.name.common}
                        </h1>
                        <p className="text-xl text-gray-600">
                            {country.name.official}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                        <h3 className="font-semibold text-gray-700 mb-1">
                            Country Code
                        </h3>
                        <p className="text-gray-900">
                            {country.cca2} / {country.cca3}
                        </p>
                    </div>

                    {country.capital && country.capital.length > 0 && (
                        <div>
                            <h3 className="font-semibold text-gray-700 mb-1">
                                Capital
                            </h3>
                            <p className="text-gray-900">
                                {country.capital.join(', ')}
                            </p>
                        </div>
                    )}

                    <div>
                        <h3 className="font-semibold text-gray-700 mb-1">
                            Population
                        </h3>
                        <p className="text-gray-900">
                            {country.population.toLocaleString()}
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-700 mb-1">
                            Region
                        </h3>
                        <p className="text-gray-900">
                            {country.region}
                            {country.subregion && ` - ${country.subregion}`}
                        </p>
                    </div>
                </div>

                {currencies.length > 0 && (
                    <div className="mb-6">
                        <h3 className="font-semibold text-gray-700 mb-2">
                            Currencies
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {currencies.map(currency => (
                                <span
                                    key={currency.code}
                                    className="bg-gray-100 px-3 py-1 rounded text-sm"
                                >
                                    {currency.symbol} {currency.name} (
                                    {currency.code})
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {languages.length > 0 && (
                    <div className="mb-6">
                        <h3 className="font-semibold text-gray-700 mb-2">
                            Languages
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {languages.map(language => (
                                <span
                                    key={language}
                                    className="bg-gray-100 px-3 py-1 rounded text-sm"
                                >
                                    {language}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {country.timezones && country.timezones.length > 0 && (
                    <div className="mb-6">
                        <h3 className="font-semibold text-gray-700 mb-2">
                            Timezones
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {country.timezones.map(timezone => (
                                <span
                                    key={timezone}
                                    className="bg-gray-100 px-3 py-1 rounded text-sm"
                                >
                                    {timezone}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {country.maps?.googleMaps && (
                    <div>
                        <a
                            href={country.maps.googleMaps}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-accent underline"
                        >
                            View on Google Maps →
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}
