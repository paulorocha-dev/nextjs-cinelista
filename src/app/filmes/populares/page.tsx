import Grid from "@/app/components/Grid";
import Title from "@/app/components/Title";
import { getPopularMovies } from "@/lib/api/tmdb";

export const revalidate = 60;

const filmesPopulares = async () => {
  const filmes = await getPopularMovies();

  return (
    <>
      <Title title="Filmes Populares" />
      <Grid filmes={filmes} />
    </>
  );
};

export default filmesPopulares;
