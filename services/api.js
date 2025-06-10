import axios from "axios";

const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3/",
  IMAGE_BASE_URL: "https://image.tmdb.org/t/p/w500", // Add this line
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_AUTH_TOKEN}`,
  },
};

export const showMovies = async (page = 1) => {
  const endpoint = `${TMDB_CONFIG.BASE_URL}discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`;

  try {
    const response = await axios.get(endpoint, {
      headers: TMDB_CONFIG.headers,
    });
    
    // Add posterUrl to each movie object
    const moviesWithUrls = response.data.results.map(movie => ({
      ...movie,
      posterUrl: `${TMDB_CONFIG.IMAGE_BASE_URL}${movie.poster_path}`
    }));

    return {
      movies: moviesWithUrls,  // Return the enhanced movies
      currentPage: response.data.page,
      totalPages: response.data.total_pages,
      totalResults: response.data.total_results
    };
  } catch (error) {
    const statusText =
      error.response?.statusText || error.message || "Unknown Error";
    throw new Error(`failed to fetch movies, error: ${statusText}`);
  }
};