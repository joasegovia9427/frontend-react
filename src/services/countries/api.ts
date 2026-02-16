import { publicApi } from '~/config/api';

import { DETAIL_FIELDS, LIST_FIELDS } from './constants';
import type {
    Country,
    GetCountriesByCodeProps,
    GetCountriesByNameProps,
} from './types';

export const getCountries = async (): Promise<Country[]> => {
    const { data } = await publicApi.get<Country[]>(
        `/all?fields=${LIST_FIELDS}`
    );

    // Simulate slow network to show the skeleton
    await new Promise(resolve => setTimeout(resolve, 1000));
    return data;
};

export const getCountryByName = async ({
    name,
}: GetCountriesByNameProps): Promise<Country[]> => {
    const { data } = await publicApi.get<Country[]>(
        `/name/${encodeURIComponent(name)}?fields=${DETAIL_FIELDS}`
    );
    return data;
};

export const getCountryByCode = async ({
    code,
}: GetCountriesByCodeProps): Promise<Country> => {
    const { data } = await publicApi.get<Country | Country[]>(
        `/alpha/${code.toUpperCase()}?fields=${DETAIL_FIELDS}`
    );
    return Array.isArray(data) ? data[0] : data;
};
