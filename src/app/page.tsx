import Link from "next/link";
import "./page.css";

export default function Home(): JSX.Element {
  return (
    <main className="section-landing">
      <section className="section-main">
        <h1 className="title-landing">Change Images</h1>
        <p className="description-landing">
          Convierte imagenes <b className="b-home">.png</b>,{" "}
          <b className="b-home">.jpg</b>, <b className="b-home">.jpg</b>,{" "}
          <b className="b-home">.webp</b>, etc. a otros formatos que desees
        </p>
      </section>
      <section className="section-main">
        <div className="container-card-top">
          <div className="card-top">
            <h2 className="title-card">Convertir de Forma fácil</h2>
            <p className="detail-card">
              Agrega tu imagen y el formato al que quieres cambiarlo de forma
              fácil
            </p>
            <Link href="/images" className="link-card">
              Pruébalo ahora
            </Link>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p className="title-footer">© ChangeImages 2024</p>
      </footer>
    </main>
  );
}
