import { database } from "../configs/database.js"; //importei o database

    class produtoRepository{
        static async cadastrar(dados){
        const { id_produto, nome_produto, descricao_produto, qtd_estoque, categoria, preco_produto, tamanho, imagem }= dados;
        const sql = "INSERT INTO produto VALUES(0, ?, ?, ?, ?, ?, ?, ?)";
        await database.raw(sql, [nome_produto, descricao_produto, qtd_estoque, categoria, preco_produto, tamanho, imagem  ])
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

        static async listaPorCategoria(categoria){
        const sql = "SELECT * FROM produto WHERE categoria = ?"
        const lista = await database.raw(sql, [categoria]);
        return lista[0];
        }

        static async buscaId(id){
        const sql = "SELECT * FROM produto WHERE id_produto = ?"
        const real = await database.raw(sql, [id])
        return real[0];
        }
    };



    export { produtoRepository };

