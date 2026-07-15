export function RatingStars({rating}:{rating:number}){
  return (
    <span aria-label={`${rating} out of 5 stars`} className="text-red-500 font-bold text-sm">
      ★ {rating.toFixed(1)}
    </span>
  );
}
