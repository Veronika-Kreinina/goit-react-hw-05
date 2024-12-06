import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      <ul>
        {movies.map(({ id, title, release_date }) => (
          <li key={id}>
            <Link to={`movies/${id}`} state={location}>
              {title} | {release_date.slice(0, 4)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
