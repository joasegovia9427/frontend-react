export const queryKeys = {
    countries: {
        all: ['countries'] as const,
        byCode: (code: string) => ['countries', code] as const,
        byName: (name: string) => ['countries', 'name', name] as const,
    },
} as const;
