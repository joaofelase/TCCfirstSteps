/**
 * --ele puxa o parametro fastify pra poder conectar as coisas
 * @param {import("fastify").FastifyInstance} fastify 
 */

import { cadastroClienteController } from "../controllers/clientes.controller/cadastro-cliente.controller.js"

async function clientesRoutes(fastify) {
    fastify.post("/cadastro-cliente", cadastroClienteController)
}

export {clientesRoutes}