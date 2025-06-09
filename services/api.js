import axios from "axios";

const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3/",

  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_AUTH_TOKEN}`,
  },
};

export const showMovies = async () => {
  const endpoint = `${TMDB_CONFIG.BASE_URL}discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;

  try {
    const response = await axios.get(endpoint, {
      headers: TMDB_CONFIG.headers,
    });

    return  {movies : response.data.results};
  } catch (error) {
    const statusText =
      error.response?.statusText || error.message || "Unknown Error";
    throw new Error(`failed to fetch movies , error  : ${statusText}`);
  }
};