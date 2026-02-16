import { useQuery } from '@tanstack/react-query';

import { getCountries, getCountryByCode, getCountryByName } from './api';
import { queryKeys } from './queryKeys';
import { transformCountryToList } from './transformers';
import type {
    CountriesByName,
    Country,
    CountryByCode,
    CountryListItem,
} from './types';

/**
 * Hook to fetch all countries
 */
export const useCountries = () => {
    return useQuery<CountryListItem[], Error>({
        queryKey: queryKeys.countries.all,
        queryFn: async () => {
            const data = await getCountries();
            return data.map(transformCountryToList);
        },
    });
};

/**
 * Hook to fetch a country by its code
 * @param code - 3-letter country code (cca3)
 * @param enabled - Whether the query should run
 */
export const useCountryByCode = ({ code, enabled }: CountryByCode) => {
    return useQuery<Country, Error>({
        queryKey: queryKeys.countries.byCode(code),
        queryFn: () => getCountryByCode({ code }),
        enabled: enabled && !!code,
    });
};

/**
 * Hook to fetch countries by name
 * @param name - Country name to search for
 * @param enabled - Whether the query should run
 */
export const useCountriesByName = ({ name, enabled }: CountriesByName) => {
    return useQuery<Country[], Error>({
        queryKey: queryKeys.countries.byName(name),
        queryFn: () => getCountryByName({ name }),
        enabled: enabled && !!name,
    });
};
