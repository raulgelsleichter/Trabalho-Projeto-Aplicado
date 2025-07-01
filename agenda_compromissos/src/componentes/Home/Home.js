import { useState, useEffect} from "react";
import Criarevento from "../Criarevento/Criarevento";

function Home() {
    const dadosSalvos = localStorage.getItem("eventos");
    const eventosIniciais = dadosSalvos ? JSON.parse(dadosSalvos): [
        { titulo: "Jogo no Brasileirão série B", descricao: "Avaí x Criciúma na sexta-feira dia 27/06/2025, às 20:30 horas em campo pela série B do campeonato brasileiro"}
    ]
    const [eventos, atualizarEventos] = useState(eventosIniciais);

    useEffect(() => {
        localStorage.setItem("eventos", JSON.stringify(eventos));
    }, [eventos]);
    
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