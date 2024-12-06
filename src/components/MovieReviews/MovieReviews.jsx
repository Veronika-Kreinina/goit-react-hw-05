import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviesReview } from "../../api.js/api";

const MovieReviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchMoviesReview(id);
        setReviews(data || []);
      } catch (error) {
        setError(error);
      }
    };
    getData();
  }, [id]);

  return (
    <div>
      {error && <p>Error loading movie reviews</p>}
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <h3>Author: {review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
