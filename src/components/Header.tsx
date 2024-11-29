import "../styles/header.css";
import Link from "next/link";


export const Header = (): JSX.Element => {

    return (
        <header className="header">
            <nav className="navbar">
                <Link href="/" className="link-nav">Principal</Link>
                <Link href="/images" className="link-nav">Imagenes</Link>
            </nav>
        </header>
    )

}

