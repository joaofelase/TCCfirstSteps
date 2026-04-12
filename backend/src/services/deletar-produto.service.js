import { produtoRepository } from "../repositories/produtos.repository.js";

async function deletarProdutoService(id) {
    if(!id){
        return false;
    }

    await produtoRepository.deletar(id);
    return true;
};

export {deletarProdutoService}