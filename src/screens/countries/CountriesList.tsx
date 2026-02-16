import { useState } from 'react';

import { ErrorState } from '~/components/ui/ErrorState';
import { useCountries } from '~/services/countries';

import { CountryItem } from './CountriesItem';
import { CountriesSkeleton } from './CountriesSkeleton';

export const CountriesList = () => {
    const { data: countries = [], isLoading, error, refetch } = useCountries();
    const [expandedCountryId, setExpandedCountryId] = useState<string | null>(
        null
    );

    const toggleCountryDetails = (countryId: string) => {
        setExpandedCountryId(prev => (prev === countryId ? null : countryId));
    };

    if (isLoading) {
        return <CountriesSkeleton />;
    }

    if (error) {
        return (
            <ErrorState
                title="Failed to load countries"
                message={error.message || 'Failed to load countries'}
                onRetry={() => {
                    refetch();
                }}
            />
        );
    }

    return (
        <div>
            <h1>Countries</h1>
            <p>{countries.length} countries found</p>
            <ul className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {countries.map(country => (
                    <CountryItem
                        key={country.id}
                        countryId={country.id}
                        isExpanded={expandedCountryId === country.id}
                        onToggle={() => toggleCountryDetails(country.id)}
                        country={country}
                    />
                ))}
            </ul>
        </div>
    );
};
