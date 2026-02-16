import { z } from 'zod';

export const countryNameSchema = z.object({
    common: z.string(),
    official: z.string(),
    nativeName: z
        .record(
            z.string(),
            z.object({ official: z.string(), common: z.string() })
        )
        .optional(),
});

export const currencySchema = z.object({
    name: z.string(),
    symbol: z.string(),
});

export const languageSchema = z.record(z.string(), z.string());

export const countrySchema = z.object({
    name: countryNameSchema,
    cca2: z.string(), // 2-letter country code
    cca3: z.string(), // 3-letter country code
    capital: z.array(z.string()).optional(),
    population: z.number(),
    region: z.string(),
    subregion: z.string().optional(),
    currencies: z.record(z.string(), currencySchema).optional(),
    languages: languageSchema.optional(),
    timezones: z.array(z.string()).optional(),
    flags: z.object({
        png: z.string(),
        svg: z.string(),
        alt: z.string().optional(),
    }),
    flag: z.string().optional(), // emoji flag
    maps: z.object({
        googleMaps: z.string(),
        openStreetMaps: z.string(),
    }),
});

// Simplified country for list view
export const countryListItemSchema = z.object({
    id: z.string(), // cca3 code
    name: z.string(), // common name
    code: z.string(), // cca2 code
    capital: z.string().optional(),
    population: z.number(),
    region: z.string(),
    flag: z.string(), // emoji flag
});

export const countryItemPropsSchema = z.object({
    countryId: z.string(),
    isExpanded: z.boolean(),
    onToggle: z.function(),
    country: z.object({
        id: z.string(),
        name: z.string(),
        code: z.string(),
        capital: z.string().optional(),
        population: z.number(),
        region: z.string(),
        flag: z.string(),
    }),
});

export const countryByCodeSchema = z.object({
    code: z.string(),
    enabled: z.boolean(),
});

export const countriesByNameSchema = z.object({
    name: z.string(),
    enabled: z.boolean(),
});

export const getCountriesByNamePropsSchema = z.object({
    name: z.string(),
});

export const getCountriesByCodePropsSchema = z.object({
    code: z.string(),
});
