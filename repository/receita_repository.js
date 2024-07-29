let idGerador = 2;

let listaReceitas = [
    {
        id: 1,
        nome: "Bolo de Cenoura",
        categoria: "sobremesa",
        ingredientes: ["cenoura", "farinha", "açúcar", "ovos"],
        modoPreparo: "Misture os ingredientes e asse por 30 minutos."
    },
    {
        id: 2,
        nome: "Torta de Limão",
        categoria: "prato principal",
        ingredientes: ["feijão", "carne de porco", "linguiça", "temperos"],
        modoPreparo: "Cozinhe os ingredientes por várias horas."
    }
];

function listar() {
    return listaReceitas;
}

function inserir(receita) {
    receita.id = ++idGerador;
    listaReceitas.push(receita);
    return receita;
}

function buscarPorId(id) {
    for (let receita of listaReceitas) {
        if (receita.id === id) {
            return receita;
        }
    }
}

function atualizar(id, receitaAlterada) {
    let receita = buscarPorId(id);
    if (receita) {
        receita.nome = receitaAlterada.nome;
        receita.categoria = receitaAlterada.categoria;
        receita.ingredientes = receitaAlterada.ingredientes;
        receita.modoPreparo = receitaAlterada.modoPreparo;
    }
    return receita;
}

function deletar(id) {
    let receita;
    for (let indice in listaReceitas) {
        if (listaReceitas[indice].id === id) {
            receita = listaReceitas.splice(indice, 1)[0];
        }
    }
    return receita;
}

function pesquisarPorCategoria(categoria) {
    return listaReceitas.filter(
        (receita) => {
            return receita.categoria === categoria;
        }
    );
}

function pesquisarPorLikeNome(nome) {
    return listaReceitas.filter(
        (receita) => {
            return receita.nome.toUpperCase().includes(nome.toUpperCase());
        }
    );
}

module.exports = {
    listar, 
    inserir,
    buscarPorId,
    atualizar,
    deletar,
    pesquisarPorCategoria,
    pesquisarPorLikeNome
};
