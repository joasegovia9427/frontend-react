import { ChevronDownIcon } from 'lucide-react';

import Button from '~/components/ui/Button';
import { useCountryByCode } from '~/services/countries';
import { CountryItemProps } from '~/services/countries/types';

import { CountryDetail } from './CountryDetail';

export const CountryItem = ({
    countryId,
    isExpanded,
    onToggle,
    country,
}: CountryItemProps) => {
    const {
        data: countryDetails,
        isLoading: loadingDetails,
        error: detailsError,
    } = useCountryByCode({ code: countryId, enabled: isExpanded ?? false });

    return (
        <li className="rounded-lg bg-white shadow-sm">
            <Button
                variant="transparent"
                onClick={onToggle}
                className="h-auto w-full p-0 text-left"
            >
                <div className="flex flex-col divide-y divide-gray-200">
                    <div className="flex w-full items-center justify-between p-6 pb-0">
                        <div className="flex-1 space-y-3 truncate">
                            <div className="flex items-center justify-between space-x-3">
                                <h3 className="truncate text-sm font-medium text-gray-900">
                                    {country.name}
                                </h3>
                                <span className="inline-flex shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset">
                                    {country.region}
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="">
                                    <p className="truncate text-sm">
                                        {`Capital: ${country.capital || 'No capital'}`}
                                        <br />
                                        {`Population: ${country.population.toLocaleString()}`}
                                        <br />
                                    </p>
                                </div>
                                {country.flag && (
                                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gray-50 text-2xl outline-1 -outline-offset-1 outline-black/5">
                                        {country.flag}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex divide-x divide-gray-200">
                        <div className="flex w-0 flex-1">
                            <div className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                                <ChevronDownIcon
                                    aria-hidden="true"
                                    className={`size-5 text-gray-400 transition-transform duration-200 ${
                                        isExpanded ? 'rotate-180' : ''
                                    }`}
                                />
                                Details
                            </div>
                        </div>
                    </div>

                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            isExpanded
                                ? 'max-h-[600px] opacity-100'
                                : 'max-h-0 opacity-0'
                        }`}
                    >
                        <div className="rounded-b-lg border-t border-gray-200 bg-gray-50">
                            <div className="overflow-y-auto p-6">
                                {(() => {
                                    if (loadingDetails) {
                                        return (
                                            <div className="flex items-center justify-center py-8">
                                                <p className="text-sm text-gray-600">
                                                    Loading details...
                                                </p>
                                            </div>
                                        );
                                    }
                                    if (detailsError) {
                                        return (
                                            <div className="flex items-center justify-center py-8">
                                                <p className="text-sm text-red-600">
                                                    Failed to load details
                                                </p>
                                            </div>
                                        );
                                    }
                                    if (countryDetails) {
                                        return (
                                            <CountryDetail
                                                country={countryDetails}
                                            />
                                        );
                                    }
                                    return null;
                                })()}
                            </div>
                        </div>
                    </div>
                </div>
            </Button>
        </li>
    );
};
