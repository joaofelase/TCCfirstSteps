import { clientesRepository } from "../../repositories/clientes.repository.js"
import { ValidationError } from "../../errors/ValidationError.js";

async function cadastroClienteService(dados) {
    let {nome, email, senha, telefone, CPF, data_cadastro} = dados;
    
    if(["nome", "email", "senha", "telefone", "CPF", "data_cadastro"].includes(dados)){
        throw new Error("Erro de validação");   
    }

    await clientesRepository.cadastroCliente(dados);
};

export {cadastroClienteService}