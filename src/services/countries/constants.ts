export const STALE_TIME = {
    FILTERS: 1000 * 60 * 10, // 10 minutes
    DASHBOARD_DATA: 1000 * 60 * 5, // 5 minutes
} as const;

export const COUNTRY_REGIONS = {
    EUROPE: 'Europe',
    ASIA: 'Asia',
    AFRICA: 'Africa',
    AMERICAS: 'Americas',
    OCEANIA: 'Oceania',
} as const;

export const DEFAULT_PAGE_SIZE = 20;
