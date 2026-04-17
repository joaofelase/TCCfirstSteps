import { clientesRepository } from "../../repositories/clientes.repository.js"
import { ValidationError } from "../../errors/ValidationError.js";
import bcrypt  from 'bcrypt'


async function cadastroClienteService(dados) {
    let { nome, email, senha, telefone, CPF, data_cadastro } = dados;

    if (["nome", "email", "senha", "telefone", "CPF", "data_cadastro"].includes(dados)) {
        throw new ValidationError("Erro de validação");
    }

    const saltRounds = 10; //criando o tamanho do hash
    const senhaHash = await bcrypt.hash(dados.senha, saltRounds); //alterando a senha para hash
    const dadosFinais = { nome, email, senha, telefone, CPF, data_cadastro, senha: senhaHash }; //atribuindo o hash na senha

    await clientesRepository.cadastroCliente(dadosFinais);
};

export { cadastroClienteService }