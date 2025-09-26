const LoaderSkeleton = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
    {[...Array(12)].map((_, index) => (
      <div key={index} className="animate-pulse">
        <div className="skeleton-shimmer rounded-xl aspect-[2/3] mb-3"></div>
        <div className="skeleton-shimmer h-4 rounded mb-2"></div>
        <div className="skeleton-shimmer h-3 rounded w-3/4"></div>
      </div>
    ))}
  </div>
);

export default LoaderSkeleton;