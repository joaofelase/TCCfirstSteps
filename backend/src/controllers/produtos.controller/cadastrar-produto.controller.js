import { cadastrarProdutoService } from "../../services/produtos.service/cadastrar-produto.service.js"


/**
 * @param {import("fastify").FastifyRequest} request
 * @param {import("fastify").FastifyReply} reply
 */

async function cadastrarProdutoController(request, reply) {
    const dados = request.body; //pegando os dados do body que o Mav vai preencher.
    const retorno = await cadastrarProdutoService(dados); //pega os dados da controller e responde pra gente se deu certo mandar pra service

    if(retorno){
        return reply.status(200).send({
            "message": "Produto cadastrado com sucesso!"
        }
        )
    }


};

export { cadastrarProdutoController }