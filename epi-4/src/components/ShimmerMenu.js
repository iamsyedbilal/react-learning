function ShimmerMenu() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6 animate-pulse">
      {/* Restaurant Info Skeleton */}
      <div className="flex items-center gap-6 mb-8">
        <div className="w-32 h-32 bg-gray-200 rounded-lg"></div>
        <div className="flex-1 space-y-3">
          <div className="h-6 w-48 bg-gray-200 rounded"></div>
          <div className="h-4 w-64 bg-gray-200 rounded"></div>
          <div className="h-4 w-40 bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* Offers Skeleton */}
      <div className="mb-6">
        <div className="h-6 w-32 bg-gray-200 rounded mb-4"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((n) => (
            <div key={n} className="h-20 bg-gray-200 rounded-lg"></div>
          ))}
        </div>
      </div>

      {/* Items Skeleton */}
      <div>
        <div className="h-6 w-40 bg-gray-200 rounded mb-4"></div>
        <div className="space-y-6">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="flex justify-between items-start gap-4">
              <div className="flex-1 space-y-3">
                <div className="h-5 w-48 bg-gray-200 rounded"></div>
                <div className="h-4 w-32 bg-gray-200 rounded"></div>
              </div>
              <div className="w-28 h-24 bg-gray-200 rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShimmerMenu;
