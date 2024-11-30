import { useEffect, useState } from "react";
import { fetchMovies } from "../api.js/api";
import MovieList from "../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchMovies();
        setMovies(data);
      } catch (error) {
        setError(error);
      }
    };
    getData();
  }, []);
  return (
    <div>
      <MovieList movies={movies} />
      {error && <p>Something went wrong</p>}
    </div>
  );
};

export default HomePage;
