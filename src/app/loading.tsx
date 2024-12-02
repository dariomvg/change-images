import "../styles/loader.css";

export default function loading(): JSX.Element {
  return (
    <section className="container-loader">
      <section className="dots-container">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </section>
    </section>
  );
}
