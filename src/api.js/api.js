import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDQ4OTk5ZGI5ZTdiODNjMzJhZmFhNWUyMjVhYjI2MyIsIm5iZiI6MTczMjUyNjI4OS43NTM4NzI5LCJzdWIiOiI2NzQ0M2QwNTEwMGU0ZjQ1MjRmYmIyZGEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.986JrEHJ6GC7hO51Tslowh9vc_uFGhTyALAPtganqq0",
  },
  params: {
    include_adult: "false",
    language: "en-US",
    page: "1",
  },
};

export const fetchMovies = async () => {
  const { data } = await axios.get(`trending/movie/day`, options);
  return data.results;
};

export const fetchMoviesById = async (id) => {
  const { data } = await axios.get(`movie/${id}`, options);
  return data;
};

export const fetchMoviesCast = async (id) => {
  const { data } = await axios.get(`movie/${id}credits`, options);
  return data.cast;
};

export const fetchMoviesReview = async (id) => {
  const { data } = await axios.get(`movie/${id}reviews`, options);
  return data.reviews;
};
export const searchMovies = async (query) => {
  const { data } = await axios.get("search/movie", {
    ...options,
    params: {
      ...options.params,
      query,
    },
  });
  return data.results;
};
