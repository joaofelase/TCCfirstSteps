import { cadastrarProdutoService } from "../../services/produtos.service/cadastrar-produto.service.js"


/**
 * @param {import("fastify").FastifyRequest} request
 * @param {import("fastify").FastifyReply} reply
 */

async function cadastrarProdutoController(request, reply) {
    const dados = request.body; //pegando os dados do body que o Mav vai preencher.
    const retorno = await cadastrarProdutoService(dados); //pega os dados da controller e responde pra gente se deu certo mandar pra service

    try {
        if (retorno) { //se existir um retorno, ele entende que os dados foram cadastrados e dá 201
            return reply.status(201).send({
                "message": "produto enviado"
            });
        }
        return reply.status(400).send({ //erro  400 é se a URL estiver escrito errada
            "message": "Erro na URL"
        });

    } catch (erro) { //problema no servidor
        console.error(erro);
        return reply.status(500).send({
            "message": "Erro Interno"
        })
    }


};

export { cadastrarProdutoController }