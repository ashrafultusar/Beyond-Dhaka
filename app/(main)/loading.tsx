export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b2f1d]">
            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-[#f96f1f]/8 blur-[160px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className="flex flex-col items-center gap-6">
                {/* Spinner */}
                <div className="relative w-14 h-14">
                    <div className="absolute inset-0 rounded-full border-[3px] border-white/10"></div>
                    <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-[#f97316] animate-spin"></div>
                </div>

                {/* Text */}
                <p className="text-white/50 text-[13px] font-medium tracking-wider uppercase">
                    Loading…
                </p>
            </div>
        </div>
    );
}
