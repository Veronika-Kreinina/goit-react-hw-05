import { useEffect, useState } from "react";
import MovieList from "../components/MovieList/MovieList";
import { searchMovies } from "../api.js/api";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);

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
    const form = e.target;
    setQuery(form.elements.query.value.trim());
    form.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" placeholder="Type movie or cartoon" />
        <button>Search</button>
      </form>
      <MovieList movies={movies} />
      {error && <p>Something went wrong</p>}
    </div>
  );
};

export default MoviesPage;
