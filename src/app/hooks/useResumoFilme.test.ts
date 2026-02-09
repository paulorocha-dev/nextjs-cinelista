import { renderHook } from "@testing-library/react";
import { useResumoFilme } from "./useResumoFilme";

test("Retorna overview inteiro se menor que o limite", () => {
  const texto = "Resumo curto";
  const { result } = renderHook(() => useResumoFilme(texto, 256));
  expect(result.current).toBe(texto);
});

test("Retorna overviw cortado e reticências se maior que o limite", () => {
  const texto =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const { result } = renderHook(() => useResumoFilme(texto, 10));
  expect(result.current).toBe("Lorem ipsu...");
});
