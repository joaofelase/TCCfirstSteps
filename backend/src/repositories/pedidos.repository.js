import { database } from "../configs/database.js"; //importei o database


    class pedidoRepository{
        static async criar(dados){
        const {id_pedido, data_pedido, valor_pedido, qtd_itens, status_pedido, fk_idcliente, fk_idcupom} = dados;
        const sql = "INSERT INTO pedido VALUES()";
        await database.raw(sql, [dados]);
        }

    }



    export {pedidoRepository}
