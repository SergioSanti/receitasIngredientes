let idGerador = 2;

let listaIngredientes = [
    {
        id: 1,
        nome: "Cenoura",
        categoria: "Vegetal",
        quantidade: "1 kg"
    },
    {
        id: 2,
        nome: "Farinha",
        categoria: "Grão",
        quantidade: "1 kg"
    },
    {
        id: 3,
        nome: "Açúcar",
        categoria: "Aditivo",
        quantidade: "1 kg"
    },
    {
        id: 4,
        nome: "Biscoito de Polvilho",
        categoria: "biscoitos",
        quantidade: "100 g"
    },
    {
        id: 6,
        nome: "Creme de Leite",
        categoria: "Aditivo",
        quantidade: "100 g"
    },
    {
        id: 7,
        nome: "Leite Condensado",
        categoria: "Aditivo",
        quantidade: "100 g"
    },
    {
      id: "8",
      nome: "Limão",
      categoria: "Fruta",
      quantidade: "100 g"

    }

];

function listar() {
    return listaIngredientes;
}

function inserir(ingrediente) {
    ingrediente.id = ++idGerador;
    listaIngredientes.push(ingrediente);
    return ingrediente;
}

function buscarPorId(id) {
    for (let ingrediente of listaIngredientes) {
        if (ingrediente.id === id) {
            return ingrediente;
        }
    }
}

function atualizar(id, ingredienteAlterado) {
    let ingrediente = buscarPorId(id);
    if (ingrediente) {
        ingrediente.nome = ingredienteAlterado.nome;
        ingrediente.categoria = ingredienteAlterado.categoria;
        ingrediente.quantidade = ingredienteAlterado.quantidade;
    }
    return ingrediente;
}

function deletar(id) {
    let ingrediente;
    for (let indice in listaIngredientes) {
        if (listaIngredientes[indice].id === id) {
            ingrediente = listaIngredientes.splice(indice, 1)[0];
        }
    }
    return ingrediente;
}

function pesquisarPorCategoria(categoria) {
    return listaIngredientes.filter(
        (ingrediente) => {
            return ingrediente.categoria === categoria;
        }
    );
}

function pesquisarPorLikeNome(nome) {
    return listaIngredientes.filter(
        (ingrediente) => {
            return ingrediente.nome.toUpperCase().includes(nome.toUpperCase());
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
