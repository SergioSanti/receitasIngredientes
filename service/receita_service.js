const ingredienteRepository = require('../repository/ingrediente_repository');

async function listar() {
    try { 
        return await ingredienteRepository.listar();
    } catch (err) {
        throw { id: 500, message: err.message };
    }
}

async function inserir(ingrediente) {
    if (ingrediente && ingrediente.nome) { // ingrediente != undefined
        try { 
            return await ingredienteRepository.inserir(ingrediente);
        } catch (err) {
            throw { id: 500, message: err.message };
        }
    } else {
        throw { id: 400, message: "Ingrediente não possui nome" };
    }
}

async function buscarPorId(id) {
    let ingrediente;
    try { 
        ingrediente = await ingredienteRepository.buscarPorId(id);
    } catch (err) {
        throw { id: 500, message: err.message };
    }

    if (ingrediente) {
        return ingrediente;
    } else {
        throw { id: 404, message: "Ingrediente não encontrado" };
    }
}

async function atualizar(id, ingrediente) { 
    if (ingrediente && ingrediente.nome) { // ingrediente != undefined
        let ingredienteAtualizado;     
        try {  
            ingredienteAtualizado = await ingredienteRepository.atualizar(id, ingrediente);  
        } catch (err) {
            throw { id: 500, message: err.message };
        }
        
        if (ingredienteAtualizado) {
            return ingredienteAtualizado;
        } else {
            throw { id: 404, message: "Ingrediente não encontrado" };
        }    
    } else {
        throw { id: 400, message: "Ingrediente não possui nome" };
    }
}

async function deletar(id) {
    // Faltou validar se o ingrediente está relacionado com outras receitas
    // Retornar 400 se existir relação.
    let ingredienteDeletado;     
    try {  
        ingredienteDeletado = await ingredienteRepository.deletar(id);
    } catch (err) {
        throw { id: 500, message: err.message };
    }
    
    if (ingredienteDeletado) {
        return ingredienteDeletado;
    } else {
        throw { id: 404, message: "Ingrediente não encontrado" };
    }
}

module.exports = {
    listar,
    inserir,
    buscarPorId,
    atualizar,
    deletar
};
