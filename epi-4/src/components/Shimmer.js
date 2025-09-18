function Shimmer() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {Array(8)
        .fill("")
        .map((_, i) => (
          <div
            key={i}
            className="w-64 h-72 rounded-2xl bg-gray-200 animate-pulse"
          ></div>
        ))}
    </div>
  );
}

export default Shimmer;
