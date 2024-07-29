const receitaRepository = require('../repository/receita_repository');

async function listar() {
    try { 
        return await receitaRepository.listar();
    } catch (err) {
        throw { id: 500, message: err.message };
    }
}

async function inserir(receita) {
    if (receita && receita.nome) { // receita != undefined
        try { 
            return await receitaRepository.inserir(receita);
        } catch (err) {
            throw { id: 500, message: err.message };
        }
    } else {
        throw { id: 400, message: "Receita não possui nome" };
    }
}

async function buscarPorId(id) {
    let receita;
    try { 
        receita = await receitaRepository.buscarPorId(id);
    } catch (err) {
        throw { id: 500, message: err.message };
    }

    if (receita) {
        return receita;
    } else {
        throw { id: 404, message: "Receita não encontrada" };
    }
}

async function atualizar(id, receita) { 
    if (receita && receita.nome) { // receita != undefined
        let receitaAtualizada;     
        try {  
            receitaAtualizada = await receitaRepository.atualizar(id, receita);  
        } catch (err) {
            throw { id: 500, message: err.message };
        }
        
        if (receitaAtualizada) {
            return receitaAtualizada;
        } else {
            throw { id: 404, message: "Receita não encontrada" };
        }    
    } else {
        throw { id: 400, message: "Receita não possui nome" };
    }
}

async function deletar(id) {
    // Faltou validar se a receita está relacionada com outros registros
    // Retornar 400 se existir relação.
    let receitaDeletada;     
    try {  
        receitaDeletada = await receitaRepository.deletar(id);
    } catch (err) {
        throw { id: 500, message: err.message };
    }
    
    if (receitaDeletada) {
        return receitaDeletada;
    } else {
        throw { id: 404, message: "Receita não encontrada" };
    }
}

module.exports = {
    listar,
    inserir,
    buscarPorId,
    atualizar,
    deletar
};
