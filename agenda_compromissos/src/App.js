import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, useNavigate, Link} from 'react-router-dom';
import Footer from './componentes/Footer/Footer';
import Sobre from './componentes/Sobre/Sobre';
import Home from "./componentes/Home/Home";
import Header from './componentes/Header/Header';
import Criarevento from './componentes/Criarevento/Criarevento';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/sobre' element = {<Sobre />}></Route>
                <Route path='/criarevento' element = {<Criarevento />}></Route>
            </Routes>
        </BrowserRouter>

      <Footer></Footer>
    </div>
  );
}

export default App;