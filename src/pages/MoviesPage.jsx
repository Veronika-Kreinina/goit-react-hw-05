import { NavLink, Outlet } from "react-router-dom";

const MoviesPage = () => {
  return (
    <div>
      <div>
        <h2>Movies Details</h2>

        <nav>
          <NavLink to="cast">Cast</NavLink>
          <NavLink to="reviews">Reviews</NavLink>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

export default MoviesPage;
