/**
 * --ele puxa o parametro fastify pra poder conectar as coisas
 * @param {import("fastify").FastifyInstance} fastify 
 */

import { cadastrarProdutoController } from "../controllers/produtos.controller/cadastrar-produto.controller.js";
import { deletarProdutoController } from "../controllers/produtos.controller/deletar-produto.controller.js";
import { listarProdutosController } from "../controllers/produtos.controller/listar-produtos.controller.js"
import { listarPorCategoriaController } from "../controllers/produtos.controller/listar-categoria.controller.js"


async function produtosRoutes(fastify){
    fastify.delete("/deletar-produto/:id", deletarProdutoController)
    fastify.post("/cadastrar-produto", cadastrarProdutoController)
    fastify.get("/listar-produtos", listarProdutosController)
    fastify.get("/listar-categoria/:categoria", listarPorCategoriaController)
    

};


export { produtosRoutes };