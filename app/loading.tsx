export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black">
            <div className="relative">
                {/* Outer spinning ring */}
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-red-500"></div>

                {/* Inner pulsing circle */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="animate-pulse h-16 w-16 bg-red-500/20 rounded-full"></div>
                </div>
            </div>

            <p className="mt-8 text-white/60 text-lg font-medium animate-pulse">
                Loading...
            </p>
        </div>
    );
}
