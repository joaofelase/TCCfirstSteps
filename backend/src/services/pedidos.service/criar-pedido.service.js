import { pedidoRepository } from "../../repositories/pedidos.repository.js"


async function criarPedidoService(dados) {
    const {data_pedido, FK_cliente, valor_pedido, qtd_itens, status_pedido} = dados;

    if(["data_pedido", "FK_cliente", "valor_pedido", "qtd_itens", "status_pedido"].includes(dados) ==""){
        return false;
    }

    await pedidoRepository.criar(dados);
    return true;
}

export {criarPedidoService}