import { useEffect, useState } from "react";
import MovieList from "../components/MovieList/MovieList";
import { searchMovies } from "../api.js/api";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("query");
  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      try {
        const data = await searchMovies(query);
        setMovies(data);
      } catch (error) {
        setError(error);
      }
    };
    getData();
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ query: e.currentTarget.elements.query.value });
    e.currentTarget.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" placeholder="Type movie or cartoon" />
        <button>Search</button>
      </form>
      {movies.length !== 0 && <MovieList movies={movies} />}
      {error && <p>Something went wrong</p>}
    </div>
  );
};

export default MoviesPage;
