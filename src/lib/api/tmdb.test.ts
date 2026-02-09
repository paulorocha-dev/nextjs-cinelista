import tmdbApi from "./axios";
import { getTrendingMovies } from "./tmdb";

jest.mock("./axios");
test("Retorna filmes em destaque corretamente", async () => {
  //AAA
  //Arrange
  const mockResults = [{ id: 1, title: "Matrix" }];
  (tmdbApi.get as jest.Mock).mockResolvedValue({
    data: { results: mockResults },
  });
  //Act: Chamando a função que queremos testar
  const filmes = await getTrendingMovies();
  //Assert: Verificando se o resultado está correto
  expect(filmes).toEqual(mockResults);
});
