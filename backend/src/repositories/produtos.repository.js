import { database } from "../configs/database.js"; //importei o database


    class produtoRepository{
        static async cadastrar(dados){
        const { id_produto, nome_produto, descricao_produto, qtd_estoque, categoria, preco_produto, imagem }= dados;
        const sql = "INSERT INTO produto VALUES(0, ?, ?, ?, ?, ?, ?)";
        await database.raw(sql, [nome_produto, descricao_produto, qtd_estoque, categoria, preco_produto, imagem  ])
        }

        static async deletar(id){
            const sql = "DELETE FROM produto WHERE id_produto = ?";
            await database.raw(sql, [id]);
        }

        static async listarProdutos(){
        const sql = "SELECT * FROM produto"
        const lista = await database.raw(sql);
        return lista [0];
        }
    };



    export { produtoRepository };

