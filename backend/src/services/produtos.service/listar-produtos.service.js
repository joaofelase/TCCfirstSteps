import { produtoRepository } from "../../repositories/produtos.repository.js";

async function listarProdutosService(dados) {
    
    const listaProdutos = await produtoRepository.listarProdutos();
    return listaProdutos;
}

export {listarProdutosService}