import { getTrendingMovies } from "@/lib/api/tmbd";
import Grid from "./components/Grid";
import Title from "./components/Title"
import dotenv from 'dotenv';
dotenv.config();

console.log("TMDB_API_URL:", process.env.TMDB_API_URL);
console.log("TMDB_API_KEY:", process.env.TMDB_API_KEY);


export default async function Home() {
  const filmes = await getTrendingMovies();
  return (
    <>
    <Title title="Filmes em destaque" />
    <Grid filmes={filmes}/>
    </>
  );
}
