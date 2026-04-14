create database mavOutlet
use mavOutlet

create table cliente(
    id_cliente INT auto_increment primary key,
    nome_cliente VARCHAR(50) NOT NULL,
    email VARCHAR(256) NOT NULL, 
    endereco VARCHAR(100) NOT NULL, 
    telefone CHAR(11) NOT NULL,
    cpf CHAR(11),
    data_cadastro DATE,
    senha VARCHAR(20) 
);

create table pedido(
    id_pedido INT auto_increment primary key, 
    data_pedido DATE NOT NULL,
    FK_cliente INT NOT NULL,
    foreign key(FK_cliente) references cliente(id_cliente),
    valor_pedido decimal(7,2) NOT NULL,
    qtd_itens INT NOT NULL, 
    status_pedido VARCHAR(15) NOT NULL
)

create table produto(
    id_produto INT auto_increment primary key, 
    nome_produto VARCHAR(30) NOT NULL,
    descricao_produto VARCHAR(150) NOT NULL, 
    qtd_estoque INT NOT NULL, 
    categoria VARCHAR(20),
    preco_produto decimal(7,2) NOT NULL,
    tamanho CHAR(1),
    imagem VARCHAR(255)
);



create table pedido_produto(
    id_pedidoproduto INT auto_increment primary key, 
    FK_idpedido INT,
    foreign key (FK_idpedido) references pedido(id_pedido),
    FK_idprotudo INT,
    foreign key (FK_idproduto) references produto(id_produto),
    qtd_itens INT NOT NULL, 
    subtotal decimal(7,2)
);

create table cupons(
    id_cupom INT auto_increment primary key,
    cod_cupom CHAR(8), 
    valor_cupom decimal(7,2) NOT NULL,
    tipo_desconto VARCHAR(11) --se é porcentagem ou valor,
    valor_minimo decimal(7,2) NOT NULL,
    validade_cupom date,
    limite_uso INT NOT NULL
);

create table categoria(
    id_categoria INT auto_increment primary key,
    descricao_categoria VARCHAR(150) NOT NULL
);

create table desconto(
    id_desconto INT auto_increment primary key,
    data_inicio date,
    data_final date,
    FK_idproduto INT,
    foreign key (FK_idproduto) references produto(id_produto),
    porcentagem INT
)



create table endereco(
    id_endereco INT auto_increment primary key,
    destinatario_nome VARCHAR(60) NOT NULL,
    FK_idcliente int, 
    cep CHAR(8) NOT NULL,
    rua VARCHAR(50) NOT NULL,
    bairro VARCHAR(50) NOT NULL,
    numero VARCHAR(5) NOT NULL,
    complemento VARCHAR(50)
)
