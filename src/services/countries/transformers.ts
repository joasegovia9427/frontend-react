import type { Country, CountryListItem } from './types';

/**
 * Transform Country to CountryListItem for list views
 */
export const transformCountryToList = (country: Country): CountryListItem => {
    return {
        id: country.cca3,
        name: country.name.common,
        code: country.cca2,
        capital: country.capital?.[0],
        population: country.population,
        region: country.region,
        flag: country.flag || country.flags?.svg || '',
    };
};
