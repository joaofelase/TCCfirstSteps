CREATE DATABASE IF NOT EXISTS mavOutlet;
USE mavOutlet;

CREATE TABLE IF NOT EXISTS categoria (
	id_categoria INT PRIMARY KEY AUTO_INCREMENT,
    descricao_categoria VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS cliente(
	id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(150) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    cpf CHAR(11) NOT NULL,
    data_cadastro TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS cupom(
	id_cupom INT PRIMARY KEY AUTO_INCREMENT,
    nome_cupom VARCHAR(50) NOT NULL,
    valor_cupom DECIMAL(10,2) NOT NULL,
    tipo_cupom VARCHAR(25) NOT NULL,
    valor_minimo DECIMAL(10,2) NOT NULL,
    validade_cupom DATETIME NOT NULL,
    limites_uso INT NOT NULL 
);

CREATE TABLE IF NOT EXISTS variacao (
	id_variacao INT PRIMARY KEY AUTO_INCREMENT,
	tamanho VARCHAR(10) NOT NULL,
    qtd INT NOT NULL,
    cor VARCHAR (25) NOT NULL,
    fk_idproduto INT,
    FOREIGN KEY (fk_idproduto) REFERENCES produto (id_produto)
);

CREATE TABLE IF NOT EXISTS produto(
	id_produto INT PRIMARY KEY AUTO_INCREMENT,
    nome_produto VARCHAR(50) NOT NULL,
    descricao VARCHAR(100) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    imagem_produto VARCHAR(255) NOT NULL,
    fk_idcategoria INT,
    FOREIGN KEY (fk_idcategoria) REFERENCES categoria (id_categoria)
);

CREATE TABLE IF NOT EXISTS desconto(
	id_desconto INT PRIMARY KEY AUTO_INCREMENT,
    data_inicio DATETIME NOT NULL,
    data_final DATETIME NOT NULL,
    porcentagem DECIMAL(5,2) NOT NULL,
    fk_produto INT,
    FOREIGN KEY (fk_produto) REFERENCES produto (id_produto)
);

CREATE TABLE IF NOT EXISTS endereco(
	id_endereco INT PRIMARY KEY AUTO_INCREMENT,
    destinatario_nome VARCHAR(255) NOT NULL,
    cep CHAR(8) NOT NULL,
    rua VARCHAR(100) NOT NULL,
    bairro VARCHAR(50) NOT NULL,
    numero VARCHAR(10) NOT NULL,
    cidade VARCHAR(50) NOT NULL,
    estado CHAR(2) NOT NULL,
    complemento VARCHAR(100) NOT NULL,
    fk_idcliente INT,
    FOREIGN KEY (fk_idcliente) REFERENCES cliente (id_cliente)
);

CREATE TABLE IF NOT EXISTS pedido(
	id_pedido INT PRIMARY KEY AUTO_INCREMENT,
    data_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    valor_pedido DECIMAL(10,2) NOT NULL,
    qtd_itens INT NOT NULL,
    status_pedido VARCHAR(20) NOT NULL,
    fk_idcliente INT,
    FOREIGN KEY (fk_idcliente) REFERENCES cliente (id_cliente),
    fk_idcupom INT,
    FOREIGN KEY (fk_idcupom) REFERENCES cupom (id_cupom)
);

CREATE TABLE IF NOT EXISTS pedido_produto(
	qtd_itens INT NOT NULL,
    subtotal DECIMAL(10,2) NOT NULL,
    preco_produto DECIMAL(10,2) NOT NULL,
    fk_idpedido INT,
    FOREIGN KEY (fk_idpedido) REFERENCES pedido (id_pedido),
    fk_idproduto INT,
    FOREIGN KEY (fk_idproduto) REFERENCES produto (id_produto)
);

CREATE TABLE IF NOT EXISTS produto_categoria(
	fk_idproduto INT,
	FOREIGN KEY (fk_idproduto) REFERENCES produto (id_produto),
	fk_idcategoria INT,
	FOREIGN KEY (fk_idcategoria) REFERENCES categoria (id_categoria)
);

CREATE TABLE IF NOT EXISTS variacao_produto (
	fk_idvariacao INT,
	FOREIGN KEY (fk_idvariacao) REFERENCES variacao (id_variacao),
	fk_idproduto INT,
	FOREIGN KEY (fk_idproduto) REFERENCES produto (id_produto)
);
