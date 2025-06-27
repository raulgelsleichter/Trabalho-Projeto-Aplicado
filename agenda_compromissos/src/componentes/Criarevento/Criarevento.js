import './Criarevento';
import { useState } from "react";

function Criarevento({ onNovoEvento }) {
    let [titulo, mudarTitulo] = useState("");
    let [descricao, mudarDescricao] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const novoEvento = {
            titulo: titulo.trim(),
            descricao: descricao.trim()
        }

        if (onNovoEvento) {
            onNovoEvento(novoEvento);
            alert(`Novo evento criado!
        Título: ${titulo}
        Descrição: ${descricao}`);
        } else {
            alert("Não foi possível adicionar o evento, tente novamente");
        }
        

        mudarTitulo("");
        mudarDescricao("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label> Título do evento</label>
                <input
                    type="text"
                    placeholder="Digite o título do evento"
                    value={titulo}
                    onChange={(e) => mudarTitulo(e.target.value)}
                />

                <label> Descrição do evento</label>
                <textarea
                    placeholder="Informe uma descrição desse evento"
                    value={descricao}
                    onChange={(e) => mudarDescricao(e.target.value)}
                />
                <input type="submit" value="Adicionar evento"></input>
            </form>
        </div>
    )
}

export default Criarevento;