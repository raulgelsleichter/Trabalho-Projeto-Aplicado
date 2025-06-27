import { useState } from "react";

function Criarevento() {
    let [titulo, mudarTitulo] = useState("");
    let [descricao, mudarDescricao] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("É hora do alert!");
        alert(`Novo evento criado!
        Título: ${titulo}
        Descrição: ${descricao}`);
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
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default Criarevento;