export default function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-white animate-pulse">
      {/* Hero Skeleton */}
      <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-b from-akara-cream to-white">
        <div className="w-24 h-24 bg-neutral-200 rounded-full mb-6" />
        <div className="h-16 w-80 bg-neutral-200 rounded-lg mb-4" />
        <div className="h-6 w-96 bg-neutral-100 rounded-lg mb-8" />
        <div className="h-14 w-48 bg-neutral-200 rounded-full" />
      </div>

      {/* TrustBar Skeleton */}
      <div className="py-12 bg-akara-cream border-y border-neutral-200">
        <div className="max-w-4xl mx-auto flex justify-center gap-10 px-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-8 h-8 bg-neutral-200 rounded-full" />
              <div>
                <div className="h-4 w-24 bg-neutral-200 rounded mb-1" />
                <div className="h-3 w-20 bg-neutral-100 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Menu Skeleton */}
      <div className="py-16 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div className="h-10 w-48 bg-neutral-200 rounded-lg mx-auto mb-2" />
          <div className="h-5 w-64 bg-neutral-100 rounded-lg mx-auto" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="border-2 border-neutral-200 rounded-2xl p-6 flex flex-col items-center">
              <div className="w-20 h-20 bg-neutral-200 rounded-full mb-4" />
              <div className="h-5 w-32 bg-neutral-200 rounded mb-2" />
              <div className="h-4 w-40 bg-neutral-100 rounded mb-4" />
              <div className="h-8 w-20 bg-neutral-200 rounded mb-4" />
              <div className="h-10 w-full bg-neutral-200 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}