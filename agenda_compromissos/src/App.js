import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link, useNavigate} from 'react-router-dom';
import Footer from './componentes/Footer/Footer';
import Sobre from './componentes/Sobre/Sobre';
import Home from "./componentes/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/home"> Página inicial</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre o projeto</Link>
            </li>
          </ul>
      </nav>
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/sobre' element = {<Sobre />}></Route>
      </Routes>
    </BrowserRouter>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Agenda pessoal</h1>
        <p> Organize seus compromissos de forma fácil e rápida</p>
      </header>
      <Footer></Footer>
    </div>
  );
}

export default App;
