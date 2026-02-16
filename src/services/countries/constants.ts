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

// Fields for list view (10 fields max - API limit)
// Note: 'name' includes common, official, and nativeName
// 'flags' includes png, svg, and alt
export const LIST_FIELDS = [
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
export const DETAIL_FIELDS = [
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
