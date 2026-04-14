import { deletarProdutoService } from "../../services/produtos.service/deletar-produto.service.js";

/**
 * @param {import("fastify").FastifyRequest} request
 * @param {import("fastify").FastifyReply} reply
 */

async function deletarProdutoController(request, reply) {
    try {
        const id = request.params.id;
        const seTem = await deletarProdutoService(id);
        if (!seTem) {
            return reply.status(400).send({
                message: "ID inválido"
            });
        }

        return reply.status(200).send({
            message: "Produto deletado"
        });

    } catch (erro) {
        console.error(erro);
        return reply.status(500).send({
            "message": "Erro Interno"
        });
    }
}

export { deletarProdutoController }