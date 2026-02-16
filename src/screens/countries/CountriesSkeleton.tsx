export const CountriesSkeleton = () => {
    return (
        <div className="flex min-h-[60vh] animate-pulse flex-col gap-4">
            <div className="flex h-9 w-40 flex-col gap-4 rounded-lg bg-gray-300" />
            <div className="flex h-4 w-40 flex-col gap-4 rounded-lg bg-gray-300" />
            <div className="flex flex-row flex-wrap justify-between gap-3">
                {Array.from({ length: 9 }).map((_, index) => (
                    <div
                        key={index}
                        className="flex h-40 w-96 flex-col gap-4 divide-y rounded-xl bg-gray-200 p-4"
                    >
                        <div className="space-y-3">
                            <div className="flex flex-row justify-between">
                                <div className="h-4 w-32 rounded-xl bg-gray-100" />
                                <div className="h-6 w-24 rounded-full bg-gray-100" />
                            </div>
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-col gap-3">
                                    <div className="h-4 w-32 rounded-full bg-gray-100" />
                                    <div className="h-4 w-32 rounded-full bg-gray-100" />
                                </div>
                                <div className="mb-2 h-12 w-12 rounded-full bg-gray-100" />
                            </div>
                        </div>

                        <div className="flex flex-row items-center justify-center">
                            <div className="flex flex-row gap-3">
                                <div className="size-4 rounded-full bg-gray-100" />
                                <div className="h-4 w-16 rounded-full bg-gray-100" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
