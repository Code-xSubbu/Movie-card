function MovieCard({ title, subtitle, description, image, rating }) {
  const roundedRating = Math.floor(parseFloat(rating));

  return (
    <div className="h-[530px] bg-white shadow-md rounded-lg overflow-hidden max-w-xs">
      <img src={`/${image}`} alt={title} className="w-full h-80 object-contain pt-5 hover:scale-110 transition duration-200 hover:cursor-pointer"/>
      <div className="p-4">
        <h1 className="font-bold">{title}</h1>
        <h2 className="text-sm text-gray-600">{subtitle}</h2>
        <p className="text-gray-700 text-sm mt-2 mb-8">{description}</p>
        <div className="flex items-center justify-between mt-2">
          <div className="text-yellow-500">
            {'★'.repeat(roundedRating)}
            {'☆'.repeat(5 - roundedRating)}
          </div>
          <span className="text-sm bg-blue-500 text-white px-2 py-1 rounded-full">{rating}</span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
