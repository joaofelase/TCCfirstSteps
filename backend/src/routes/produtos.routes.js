/**
 * --ele puxa o parametro fastify pra poder conectar as coisas
 * @param {import("fastify").FastifyInstance} fastify 
 */

import { cadastrarProdutoController } from "../controllers/cadastrar-produto.controller.js";
import { deletarProdutoController } from "../controllers/deletar-produto.controller.js";
import { listarProdutosController } from "../controllers/listar-produtos.controller.js"

async function produtosRoutes(fastify){
    fastify.delete("/deletar-produto/:id", deletarProdutoController)
    fastify.post("/cadastrar-produto", cadastrarProdutoController)
    fastify.get("/listar-produtos", listarProdutosController)

};


export { produtosRoutes };