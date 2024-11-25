// import axios from "axios";
import { useEffect, useState } from "react";
import MovieList from "../components/MovieList/MovieList";
import Loader from "../components/Loader/Loader";

// export const getMovies = async () => {
//   const { data } = await axios.get("");
//   };

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getMovies();
        setMovies(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <MovieList movies={movies} />
      {isLoading && <Loader />}
      {error && <p>Something went wrong</p>}
    </div>
  );
};

export default HomePage;
