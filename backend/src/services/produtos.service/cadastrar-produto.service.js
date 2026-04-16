import { produtoRepository } from "../../repositories/produtos.repository.js";
import { ValidationError } from "../../errors/ValidationError.js";

async function cadastrarProdutoService(dados) {
    let { id_produto, nome_produto, descricao_produto, qtd_estoque, categoria, preco_produto, tamanho, imagem } = dados;

    if (id_produto == "" && nome_produto == "" && descricao_produto == "" && qtd_estoque == "" && categoria == "" &&
        preco_produto == "" && imagem == "") {
        return false;
    }


    if(!["P", "M", "G", "GG", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46"].includes(tamanho)){
        throw new ValidationError("Digite um tamanho válido. Ex: P/M/G/GG ou 34");
    }
   

    // código do Giovanni, não deu certo.toUpperCase
    // if (isNaN(tamanho)) {
    //     tamanho = parseInt(tamanho);
    //     if (tamanho > 46) {
    //         console.log("Tamanho inválido. Tamanho máximo: 46")
    //     }
    // }

    await produtoRepository.cadastrar(dados);
    return true;
};

export { cadastrarProdutoService }