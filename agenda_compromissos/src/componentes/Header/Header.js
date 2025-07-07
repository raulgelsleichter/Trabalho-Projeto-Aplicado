import "./Header.css";
import { Link } from 'react-router-dom';

function Header() {
    return (
      <header className="header">
        <h1>Agenda Pessoal</h1>
        <nav>
          <a><Link to="/home"> Página inicial</Link></a>
          <a><Link to="/sobre">Sobre o projeto</Link></a>
          <a><Link to="./criarevento">Criar evento</Link></a>
        </nav>
      </header>
    );
  }
  
  export default Header;