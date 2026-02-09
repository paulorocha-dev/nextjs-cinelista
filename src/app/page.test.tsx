// Extensão do Jest DOM: adiciona matchers como "toBeInTheDocument"
import "@testing-library/jest-dom";
// Importa a função que será mockada
import { getTrendingMovies } from "./../lib/api/tmdb";
// Importa helpers para renderizar componentes e acessar a tela
import { render, screen } from "@testing-library/react";
// Importa a função de Server Component da página inicial
import Home from "./page";

jest.mock("./../lib/api/tmdb", () => ({
  getTrendingMovies: jest.fn(), //Retorna um mock da função
}));

test("Exibe o título 'Filmes em Destaque' na página inicial corretamente", async () => {
  const titulo = "Filmes em Destaque";
  render(await Home());
  // Verifica se o título está presente na tela
  expect(screen.getByText(titulo)).toBeInTheDocument();
});

test("Renderiza os filmes em destaque corretamente", async () => {
  (getTrendingMovies as jest.Mock).mockResolvedValue([
    {
      id: 1,
      title: "Filme de Teste",
      overview: "Descrição do filme de teste",
      poster_path: "public/next.svg",
      vote_average: 8.5,
    },
  ]);

  // Renderiza a página (internamente chama a função getTrendingMovies)
  render(await Home());

  // Verifica se o título renderizado aparece na tela
  expect(await screen.findByText("Filme de Teste")).toBeInTheDocument();
});

test("Exibe uma mensagem quando não houver filmes disponíveis", async () => {
  (getTrendingMovies as jest.Mock).mockResolvedValue([]);

  // Renderiza a página (internamente chama a função getTrendingMovies)
  render(await Home());

  expect(screen.getByText("Nenhum filme encontrado.")).toBeInTheDocument();
});
