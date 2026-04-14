import { produtoRepository } from "../../repositories/produtos.repository.js";

async function deletarProdutoService(id) {
    
    const produtos = await produtoRepository.buscaId(id);
    if(produtos.length > 0){
        await produtoRepository.deletar(id);
        return true;
    }

    return false;
};

export {deletarProdutoService}