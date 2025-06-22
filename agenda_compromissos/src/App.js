import logo from './logo.svg';
import './App.css';
import Sobre from "./componentes/Sobre";
import Footer from './componentes/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Agenda pessoal</h1>
        <p> Organize seus compromissos de forma fácil e rápida</p>
      </header>
      <Sobre></Sobre>
      <Footer></Footer>
    </div>
  );
}

export default App;
