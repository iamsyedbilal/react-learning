function ShimmerMenu() {
  return (
    <div className="shimmer-menu">
      {/* Restaurant Info Skeleton */}
      <div className="shimmer-header">
        <div className="shimmer-box img"></div>
        <div className="shimmer-details">
          <div className="shimmer-line title"></div>
          <div className="shimmer-line subtitle"></div>
          <div className="shimmer-line subtitle small"></div>
        </div>
      </div>

      {/* Offers Skeleton */}
      <h2 className="shimmer-line section-title"></h2>
      <div className="shimmer-offers">
        {[1, 2, 3].map((n) => (
          <div key={n} className="shimmer-box offer"></div>
        ))}
      </div>

      {/* Items Skeleton */}
      <h2 className="shimmer-line section-title"></h2>
      <div className="shimmer-items">
        {[1, 2, 3, 4].map((n) => (
          <div key={n} className="shimmer-card">
            <div className="shimmer-line card-title"></div>
            <div className="shimmer-line card-subtitle"></div>
            <div className="shimmer-box card-img"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShimmerMenu;
