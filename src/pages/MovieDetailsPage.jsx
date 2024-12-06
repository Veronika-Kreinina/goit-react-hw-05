import { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { fetchMoviesById } from "../api.js/api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [error, setError] = useState(null);
  const [details, setDetails] = useState(null);

  console.log(location);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchMoviesById(movieId);
        setDetails(data);
      } catch (error) {
        setError(error);
      }
    };
    getData();
  }, [movieId]);

  return (
    <div>
      <Link to={location.state}>Go back</Link>
      {error && <p>Error loading movie details: {error}</p>}
      {details && (
        <>
          <h2>{details.title || "Movie Details"}</h2>
          <p>{details.overview}</p>
          <img
            src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
            alt={details.title}
            width="200px"
          />
          <nav>
            <NavLink to="cast" state={location.state}>
              Cast
            </NavLink>
            <NavLink to="reviews" state={location.state}>
              Reviews
            </NavLink>
          </nav>
        </>
      )}
      <Outlet />
    </div>
  );
};
export default MovieDetailsPage;
