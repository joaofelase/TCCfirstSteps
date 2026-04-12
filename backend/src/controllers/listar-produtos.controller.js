import { listarProdutosService } from "../services/listar-produtos.service.js";

/**
 * @param {import("fastify").FastifyRequest} request
 * @param {import("fastify").FastifyReply} reply
 */

async function listarProdutosController(request, reply) {

    try {
        const lista = await listarProdutosService();
        return reply.status(200).send(lista)
    } catch (erro) {
        console.error(erro);
        return reply.status(500).send({
            "message": "Erro Interno"
        });
    }
};


export { listarProdutosController }