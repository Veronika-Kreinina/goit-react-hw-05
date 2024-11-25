const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li>{movie}</li>
      ))}
    </ul>
  );
};

export default MovieList;
