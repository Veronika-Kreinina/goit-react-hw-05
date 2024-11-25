// base_url;
// file_size;
// file_path;
import axios from "axios";
// const API_KEY = "0d48999db9e7b83c32afaa5e225ab263";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDQ4OTk5ZGI5ZTdiODNjMzJhZmFhNWUyMjVhYjI2MyIsIm5iZiI6MTczMjUyNjI4OS43NTM4NzI5LCJzdWIiOiI2NzQ0M2QwNTEwMGU0ZjQ1MjRmYmIyZGEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.986JrEHJ6GC7hO51Tslowh9vc_uFGhTyALAPtganqq0",
  },
};
export const fetchMovies = async (query) => {
  try {
    const { data } = await axios.get(`/search/movie`, {
      ...options,
      params: {
        query,
      },
    });
    return data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};
fetchMovies()
  .then((movies) => console.log(movies))
  .catch((err) => console.error(err));

export const fetchMoviesById = async (id) => {
  const { data } = await axios.get(`movie/${id}`);
  return data;
};
