import {cadastroClienteService} from "../../services/clientes/cadastro-cliente.service.js"


/**
 * @param {import("fastify").FastifyRequest} request
 * @param {import("fastify").FastifyReply} reply
 */

async function cadastroClienteController(request, reply) {
    const dados = request.body;
    const retorno = await cadastroClienteService(dados);
    if(retorno){
        return reply.status(200).send({
            "message": "Cliente cadastrado"
        })
    }
    
}

export {cadastroClienteController}