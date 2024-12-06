import { useEffect, useState } from "react";
import { fetchMoviesCast } from "../../api.js/api";
import { useParams } from "react-router-dom";

const MovieCast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchMoviesCast(id);
        setCast(data || []);
      } catch (error) {
        setError(error);
      }
    };
    getData();
  }, [id]);

  return (
    <div>
      {error && <p>Dont see the movie cast.</p>}
      <ul>
        {cast.map(({ id, name, profile_path, character }) => (
          <li key={id}>
            <img src={`https://image.tmdb.org/t/p/w200/${profile_path}`} />
            <h3>{name}</h3>
            <p>{character} </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
