export default function StarRating({ rating }) {
    return (
      <div className="flex items-center gap-1">
        {Array(5)
          .fill()
          .map((_, i) => (
            <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
              ★
            </span>
          ))}
      </div>
    );
  }
  