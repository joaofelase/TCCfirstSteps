import { database } from "../configs/database.js";

class clientesRepository{

    static async cadastroCliente(dados){
    const {id_cliente, nome, email, senha, telefone, CPF, data_cadastro} = dados;
    const sql = "INSERT INTO cliente VALUES(0, ?, ?, ?, ?, ?, ?)" // TESTAR O CURRENT_DATE
    await database.raw(sql, [dados])
    };
}

export {clientesRepository}