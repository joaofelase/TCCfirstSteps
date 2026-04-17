/**
 * --ele puxa o parametro fastify pra poder conectar as coisas
 * @param {import("fastify").FastifyInstance} fastify 
 */

import {criarPedidoController} from "../controllers/pedidos.controller/criar-pedido.controller.js"

async function pedidosRoutes(fastify){

    fastify.post("/criar-pedido", criarPedidoController)
}

export {pedidosRoutes}