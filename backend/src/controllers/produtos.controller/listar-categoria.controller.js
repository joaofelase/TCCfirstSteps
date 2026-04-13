import { listarPorCategoriaService } from "../../services/produtos.service/listar-categoria.service.js";

/**
 * @param {import("fastify").FastifyRequest} request
 * @param {import("fastify").FastifyReply} reply
 */

async function listarPorCategoriaController(request, reply) {
    try {
        const categoria = request.params.categoria
        const lista = await listarPorCategoriaService(categoria);
        return reply.status(200).send(lista);
    }catch(erro){
         console.error(erro);
         return reply.status(500).send({
            "message": "Erro interno."
         });
    }
 };

export {listarPorCategoriaController}