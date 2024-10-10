// StarRating component takes in the "rating" prop and dynamically renders stars
const StarRating = ({ rating }) => {
  // Define the total number of stars (e.g., 5)
  const totalStars = 5;

  // Calculate the number of filled stars (full stars)
  const filledStars = Math.floor(rating);

  // Check if there is a half-star (if the rating has a decimal part)
  const halfStar = rating % 1 !== 0;

  return (
    <div className="text-yellow-500 text-xs py-3">
      {/* Render the filled stars */}
      {[...Array(filledStars)].map((_, index) => (
        <i key={index} className="ri-star-fill" />
      ))}

      {/* Render a half-star if applicable */}
      {halfStar && <i className="ri-star-half-fill" />}

      {/* Render the remaining unfilled stars */}
      {[...Array(totalStars - filledStars - (halfStar ? 1 : 0))].map(
        (_, index) => (
          <i key={index} className="ri-star-fill text-gray-400" />
        )
      )}
    </div>
  );
};

export default StarRating;
