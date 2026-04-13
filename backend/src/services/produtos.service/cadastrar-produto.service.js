import { produtoRepository } from "../../repositories/produtos.repository.js";


async function cadastrarProdutoService(dados) {
    let {id_produto, nome_produto, descricao_produto, qtd_estoque, categoria, preco_produto, imagem } = dados;

    if(id_produto == "" && nome_produto == "" && descricao_produto == "" && qtd_estoque == "" && categoria == "" &&
    preco_produto == "" && imagem == ""  ){
        return false;
    }
    
    await produtoRepository.cadastrar(dados);
    return true;
};

export { cadastrarProdutoService }