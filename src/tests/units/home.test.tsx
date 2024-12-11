import Home from "@/app/page";
import { render, screen } from "@testing-library/react";

describe("Prueba de renderizado inicial", () => {
  it("muestra titulos, subtitulo", () => {
    render(<Home />);

    expect(screen.getByText("Change Images")).toBeInTheDocument();

    expect(screen.getByText("Convertir de Forma fácil")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Agrega tu imagen y el formato al que quieres cambiarlo de forma fácil"
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Pruébalo ahora")).toBeInTheDocument();
  });
});
