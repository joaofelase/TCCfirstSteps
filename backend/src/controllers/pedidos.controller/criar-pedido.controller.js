import { criarPedidoService } from "../../services/pedidos.service/criar-pedido.service.js"

/**
 * @param {import("fastify").FastifyRequest} request
 * @param {import("fastify").FastifyReply} reply
 */

async function criarPedidoController(request, reply) {
    const dados = request.body;
    const retorno = await criarPedidoService(dados);
    if(!retorno){
        return reply.status(400).send({
            "message": "Erro de validação" 
        });
    }


};

export {criarPedidoController}