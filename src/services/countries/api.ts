import type { Country, CountryListItem } from './types';

const API_BASE_URL = 'https://restcountries.com/v3.1';

// Fields for list view (10 fields max - API limit)
// Note: 'name' includes common, official, and nativeName
// 'flags' includes png, svg, and alt
const LIST_FIELDS = [
    'name', // includes common, official, nativeName
    'cca2',
    'cca3',
    'capital',
    'population',
    'region',
    'flags',
    'flag',
].join(',');

// Fields for detail view (10 fields max - API limit)
// Removed: subregion, flag (emoji), maps to stay within limit
const DETAIL_FIELDS = [
    'name',
    'cca2',
    'cca3',
    'capital',
    'population',
    'region',
    'currencies',
    'languages',
    'timezones',
    'flags',
].join(',');

export const countriesApi = {
    /**
     * Get all countries
     * @returns Array of all countries
     */
    getAll: async (): Promise<Country[]> => {
        const response = await fetch(
            `${API_BASE_URL}/all?fields=${LIST_FIELDS}`
        );
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.message || 'Failed to fetch countries');
        }
        return response.json();
    },

    /**
     * Get country by name (common or official)
     * @param name - Country name (common or official)
     * @returns Array of countries matching the name (usually 1 item)
     */
    getByName: async (name: string): Promise<Country[]> => {
        const response = await fetch(
            `${API_BASE_URL}/name/${encodeURIComponent(name)}?fields=${DETAIL_FIELDS}`
        );
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.message || 'Failed to fetch country');
        }
        return response.json();
    },

    /**
     * Get country by country code (cca3)
     * @param code - 3-letter country code (cca3)
     * @returns Country object
     */
    getByCode: async (code: string): Promise<Country> => {
        const response = await fetch(
            `${API_BASE_URL}/alpha/${code.toUpperCase()}?fields=${DETAIL_FIELDS}`
        );
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.message || 'Failed to fetch country');
        }
        const data = await response.json();
        return Array.isArray(data) ? data[0] : data;
    },
};

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
