"use client"
import { useImages } from "@/hooks/useImages";
import "./images.css";
import { ChangeEvent } from "react";

export default function Images(): JSX.Element {
  const { convertImage, image, setForm, setType, type, clearImage } = useImages();

  const handleChageImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files; 
    if(file !== null){
      setForm(file[0]); 
    }
  }

  return (
    <section className="page-images">
    {image !== undefined ? (
      <section className="show-image">
        <h1 className="title-page-image">Tu imagen ya está lista</h1>
        <p className="title-image">Formato de la imagen: {type}</p>
        <a href={image} download="imageConverted" className="link-image">Descargar</a>
        <button className="link-image" onClick={clearImage}>Cargar nueva imagen</button>
      </section>
    ) : (
      <section className="show-upload-image">
        <p className="title-upload-image">
            Agrega tu imagen y selecciona el formato al cual quieres convertir
        </p>
        <div className="box-formats">
          <select className="select-formats"  onChange={(e) => setType(e.target.value)} >
            <option value="">Formatos</option>
            <option value="png">PNG</option>
            <option value="jpeg">JPEG</option>
            <option value="jpg">JPG</option>
            <option value="webp">WEBP(mejor rendimiento)</option>
          </select>
        </div>
        <input type="file" className="input-upload-doc" onChange={handleChageImage} required data-testid="file-input" />
        <button className="button-convert" onClick={convertImage }>Convertir</button>
      </section>
    )}
  </section>
  );
}
