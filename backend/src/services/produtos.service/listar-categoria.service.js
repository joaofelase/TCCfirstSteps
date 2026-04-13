import { produtoRepository } from "../../repositories/produtos.repository.js";

async function listarPorCategoriaService(categoria) {
    const listacategoria = await produtoRepository.listaPorCategoria(categoria);
    return listacategoria;
}

export {listarPorCategoriaService}