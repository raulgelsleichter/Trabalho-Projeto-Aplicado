import { useState, useEffect} from "react";
import Criarevento from "../Criarevento/Criarevento";

function Home() {
    const [eventos, atualizarEventos] = useState([
        { titulo: "Show Chitãozinho Chororó", descricao: "3 horas com Chitãozinho Chororó pra animar o povo todo!"},
        { titulo: "Jogo Avaí x Criciúma", descricao: "às 14 horas o leão da ilha entra em campo contra o Criciúma, grande jogo na série B do campeonato brasileiro 2025! "}
    ]);

    function AdicionarEvento(novoEvento) {
        atualizarEventos([...eventos, novoEvento]);
    }
    return (
        <div>
            <h1> Página inicial</h1>
            <p> Seja bem-vindo à página inicial da sua agenda pessoal. Aqui você terá acesso aos seus eventos já cadastrados</p>
<Criarevento onNovoEvento = {AdicionarEvento}></Criarevento>
            <h2> Lista de eventos</h2>
            <ul>
                {eventos.map((evento, index) => (
                    <li key={index}>
                        {evento.titulo}: {evento.descricao};
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home;