import { useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMoviesById } from "../api.js/api";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const [error, setError] = useState(null);
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchMoviesById(id);
        setDetails(data);
      } catch (error) {
        setError(error);
      }
    };
    getData();
  }, [id]);

  const handleGoBack = useRef(location?.state ?? "/");

  return (
    <div>
      <button onClick={handleGoBack}>Go back</button>
      {error && <p>Error loading movie details: {error}</p>}
      {details && (
        <>
          <h2>{details.title || "Movie Details"}</h2>
          <p>{details.overview}</p>
          <img
            src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
            alt={details.title}
          />
          <nav>
            <NavLink to="cast" state={{ from: location.state?.from }}>
              Cast
            </NavLink>
            <NavLink to="reviews" state={{ from: location.state?.from }}>
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
