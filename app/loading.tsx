export default function Loading() {
    return (
        <main className="min-h-screen bg-[#fafcfb] animate-pulse">
            {/* Hero Skeleton */}
            <section className="relative bg-[#0b2f1d] overflow-hidden mt-12">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center min-h-[70vh]">
                        {/* Left — Text Skeleton */}
                        <div className="pt-24 pb-12 lg:py-32 lg:pr-12">
                            {/* Back link */}
                            <div className="w-28 h-4 bg-white/10 rounded-full mb-8"></div>

                            {/* Category badge */}
                            <div className="w-36 h-8 bg-white/10 rounded-full mb-6"></div>

                            {/* Title lines */}
                            <div className="space-y-3 mb-8">
                                <div className="w-full max-w-md h-10 bg-white/10 rounded-lg"></div>
                                <div className="w-3/4 max-w-sm h-10 bg-white/10 rounded-lg"></div>
                            </div>

                            {/* Meta info */}
                            <div className="flex gap-4 mb-8">
                                <div className="w-40 h-10 bg-white/10 rounded-full"></div>
                                <div className="w-32 h-10 bg-white/10 rounded-full"></div>
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-4">
                                <div className="w-44 h-12 bg-[#f97316]/20 rounded-full"></div>
                                <div className="w-48 h-12 bg-white/10 rounded-full"></div>
                            </div>
                        </div>

                        {/* Right — Image Skeleton */}
                        <div className="relative lg:h-[70vh] h-[50vh] bg-white/5 rounded-t-2xl lg:rounded-none"></div>
                    </div>
                </div>
            </section>

            {/* Showcase Skeleton */}
            <section className="bg-white py-16 md:py-24">
                <div className="container mx-auto px-6 max-w-[1200px]">
                    <div className="text-center mb-12">
                        <div className="w-32 h-4 bg-gray-200 rounded-full mx-auto mb-3"></div>
                        <div className="w-56 h-8 bg-gray-200 rounded-lg mx-auto"></div>
                    </div>
                    <div className="w-full aspect-[16/9] bg-gray-100 rounded-2xl border border-[#e5f1e8]"></div>
                </div>
            </section>

            {/* Info Cards Skeleton */}
            <section className="bg-[#f5f9f7] py-16 md:py-20">
                <div className="container mx-auto px-6 max-w-[1000px]">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {[1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl p-7 border border-[#e5f1e8]"
                            >
                                <div className="w-12 h-12 bg-gray-100 rounded-xl mb-5"></div>
                                <div className="w-20 h-3 bg-gray-100 rounded-full mb-2"></div>
                                <div className="w-32 h-6 bg-gray-200 rounded-lg"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
