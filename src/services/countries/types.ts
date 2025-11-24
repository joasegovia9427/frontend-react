// REST Countries API response types
export interface CountryName {
    common: string;
    official: string;
    nativeName?: Record<string, { official: string; common: string }>;
}

export interface Currency {
    name: string;
    symbol: string;
}

export interface Language {
    [key: string]: string;
}

export interface Country {
    name: CountryName;
    cca2: string; // 2-letter country code
    cca3: string; // 3-letter country code
    capital?: string[];
    population: number;
    region: string;
    subregion?: string;
    currencies?: Record<string, Currency>;
    languages?: Language;
    timezones?: string[];
    flags: {
        png: string;
        svg: string;
        alt?: string;
    };
    flag?: string; // emoji flag
    maps?: {
        googleMaps: string;
        openStreetMaps: string;
    };
}

// Simplified country for list view
export interface CountryListItem {
    id: string; // cca3 code
    name: string; // common name
    code: string; // cca2 code
    capital?: string;
    population: number;
    region: string;
    flag: string; // emoji flag
}
