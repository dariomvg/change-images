import Images from "@/app/images/page";
import { useImages } from "@/hooks/useImages";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";

jest.mock("@/hooks/useImages", () => ({
  useImages: jest.fn(),
}));

let mockConvertImage = jest.fn();
let mockSetForm = jest.fn();
let mockSetType = jest.fn();
let mockClearImage = jest.fn();

describe("Prueba de renderizado inicial", () => {
  it("muestra mensaje principal para agregar una imagen", () => {
    (useImages as jest.Mock).mockReturnValue({
      image: undefined,
      convertImage: mockConvertImage,
      setForm: mockSetForm,
      setType: mockSetType,
      type: "png",
      clearImage: mockClearImage,
    });
    render(<Images />);
    expect(
      screen.getByText(
        "Agrega tu imagen y selecciona el formato al cual quieres convertir"
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Formatos")).toBeInTheDocument();
    expect(screen.getByText("PNG")).toBeInTheDocument();
    expect(screen.getByText("JPEG")).toBeInTheDocument();
    expect(screen.getByText("JPG")).toBeInTheDocument();
    expect(screen.getByText("WEBP(mejor rendimiento)")).toBeInTheDocument();
    expect(screen.getByText("Convertir")).toBeInTheDocument();
  });

  it("se agrega una imagen nueva y se comprueba", () => {
    (useImages as jest.Mock).mockReturnValue({
      convertImage: mockConvertImage,
      image: undefined,
      setForm: mockSetForm,
      setType: mockSetType,
      type: "",
      clearImage: mockClearImage,
    });

    render(<Images />);

    const file = new File(["test-image"], "test-image.png", {
      type: "image/png",
    });
    const input = screen.getByTestId("file-input");

    fireEvent.change(input, { target: { files: [file] } });

    expect(mockSetForm).toHaveBeenCalledWith(file);
  });

  it("renderiza la section de imagen cuando esta este disponible", () => {
    (useImages as jest.Mock).mockReturnValue({
      convertImage: mockConvertImage,
      image: "data:image/png;base64,test",
      setForm: mockSetForm,
      setType: mockSetType,
      type: "png",
      clearImage: mockClearImage,
    });

    render(<Images />);

    expect(screen.getByText(/Tu imagen ya está lista/i)).toBeInTheDocument();
    expect(screen.getByText(/Formato de la imagen: png/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Descargar/i })).toHaveAttribute(
      "href",
      "data:image/png;base64,test"
    );
  });

  it("se hace click en cargar nueva imagen y se comprueba que se cambia la ui", () => {
    (useImages as jest.Mock).mockReturnValue({
      convertImage: mockConvertImage,
      image: "data:image/png;base64,test",
      setForm: mockSetForm,
      setType: mockSetType,
      type: "png",
      clearImage: mockClearImage,
    });

    render(<Images />);

    const button = screen.getByRole("button", { name: /Cargar nueva imagen/i });

    fireEvent.click(button);

    expect(mockClearImage).toHaveBeenCalled();
  });
});
