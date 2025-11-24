import type { Country } from '~/services/countries/types';

export const CountryDetail = ({ country }: { readonly country: Country }) => {
    const currencies = country.currencies
        ? Object.entries(country.currencies).map(([code, currency]) => ({
              code,
              name: currency.name,
              symbol: currency.symbol,
          }))
        : [];

    const languages = country.languages ? Object.values(country.languages) : [];

    const renderFlag = () => {
        if (country.flag) {
            return <span className="text-3xl">{country.flag}</span>;
        }
        if (country.flags?.svg) {
            return (
                <img
                    src={country.flags.svg}
                    alt={country.flags.alt || country.name.common}
                    className="h-12 w-12 object-contain"
                />
            );
        }
        return null;
    };

    return (
        <div className="space-y-1">
            <div className="flex items-start gap-3">
                {renderFlag()}
                <div>
                    <h3 className="text-lg font-bold text-gray-900">
                        {country.name.common}
                    </h3>
                    <p className="text-sm text-gray-600">
                        {country.name.official}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2">
                <div>
                    <h4 className="mb-1 text-xs font-semibold tracking-wide text-gray-500 uppercase">
                        Country Code
                    </h4>
                    <p className="text-sm text-gray-900">
                        {country.cca2} / {country.cca3}
                    </p>
                </div>

                {country.capital && country.capital.length > 0 && (
                    <div>
                        <h4 className="mb-1 text-xs font-semibold tracking-wide text-gray-500 uppercase">
                            Capital
                        </h4>
                        <p className="text-sm text-gray-900">
                            {country.capital.join(', ')}
                        </p>
                    </div>
                )}

                <div>
                    <h4 className="mb-1 text-xs font-semibold tracking-wide text-gray-500 uppercase">
                        Population
                    </h4>
                    <p className="text-sm text-gray-900">
                        {country.population.toLocaleString()}
                    </p>
                </div>

                <div>
                    <h4 className="mb-1 text-xs font-semibold tracking-wide text-gray-500 uppercase">
                        Region
                    </h4>
                    <p className="text-sm text-gray-900">
                        {country.region}
                        {country.subregion && ` - ${country.subregion}`}
                    </p>
                </div>
            </div>

            {currencies.length > 0 && (
                <div>
                    <h4 className="mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase">
                        Currencies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {currencies.map(currency => (
                            <span
                                key={currency.code}
                                className="rounded-md bg-white px-2.5 py-1 text-xs font-medium text-gray-700 shadow-sm ring-1 ring-gray-200"
                            >
                                {currency.symbol} {currency.name} (
                                {currency.code})
                            </span>
                        ))}
                    </div>
                </div>
            )}

            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {languages.length > 0 && (
                    <div>
                        <h4 className="mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase">
                            Languages
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {languages.map((language: string) => (
                                <span
                                    key={language}
                                    className="rounded-md bg-white px-2.5 py-1 text-xs font-medium text-gray-700 shadow-sm ring-1 ring-gray-200"
                                >
                                    {language}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {country.timezones && country.timezones.length > 0 && (
                    <div>
                        <h4 className="mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase">
                            Timezones
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {country.timezones.map((timezone: string) => (
                                <span
                                    key={timezone}
                                    className="rounded-md bg-white px-2.5 py-1 text-xs font-medium text-gray-700 shadow-sm ring-1 ring-gray-200"
                                >
                                    {timezone}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
