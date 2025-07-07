import "./Header.css";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <h1 id="Titulo"> Agenda pessoal</h1>
            <nav id="menu">
                <ul>
                    <li>
                        <Link to="/home"> Página inicial</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Sobre o projeto</Link>
                    </li>
                    <li>
                        <Link to="./criarevento">Cadastrar um evento</Link>
                    </li>
                </ul>
            </nav>
            <p> Organize seus compromissos de forma fácil e rápida</p>
        </div>
    )
}

export default Header;