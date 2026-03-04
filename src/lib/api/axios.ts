import axios from "axios";

const tmdbApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

tmdbApi.interceptors.request.use((config) => {
  const token = process.env.TMDB_TOKEN;

  if (!token) {
    throw new Error("TMDB_TOKEN não definido (faltando variável de ambiente).");
  }

  config.headers = config.headers ?? {};
  config.headers.Authorization = `Bearer ${token}`;
  config.headers.Accept = "application/json";

  return config;
});

export default tmdbApi;
