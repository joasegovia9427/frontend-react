import z from 'zod';

import {
    countriesByNameSchema,
    countryByCodeSchema,
    countryItemPropsSchema,
    countryListItemSchema,
    countryNameSchema,
    countrySchema,
    currencySchema,
    getCountriesByCodePropsSchema,
    getCountriesByNamePropsSchema,
    languageSchema,
} from './schemas';

export type CountryName = z.infer<typeof countryNameSchema>;

export type Currency = z.infer<typeof currencySchema>;

export type Language = z.infer<typeof languageSchema>;

export type Country = z.infer<typeof countrySchema>;

export type CountryListItem = z.infer<typeof countryListItemSchema>;

export type CountryItemProps = z.infer<typeof countryItemPropsSchema>;

export type CountryByCode = z.infer<typeof countryByCodeSchema>;

export type CountriesByName = z.infer<typeof countriesByNameSchema>;

export type GetCountriesByNameProps = z.infer<
    typeof getCountriesByNamePropsSchema
>;
export type GetCountriesByCodeProps = z.infer<
    typeof getCountriesByCodePropsSchema
>;
