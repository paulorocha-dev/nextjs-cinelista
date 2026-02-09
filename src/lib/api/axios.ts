import axios from "axios";

const tmdbApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
    "Content-Type": "application/json",
  },
});

export default tmdbApi;
