Atualizando pacotes do Linux
    sudo apt update

Instalando MariaDB
    sudo apt install mariadb-server mariadb-client -y

Executando
    sudo service mariadb start

Configurando a segurança Banco de Dados
    sudo mysql_secure_installation
        Switch to unix_socket authentication [Y/n] n
        Change the root password? [Y/n] n  
        Remove anonymous users? [Y/n] Y
        Disallow root login remotely? [Y/n] y
        Remove test database and access to it? [Y/n] Y
        Reload privilege tables now? [Y/n] y

Executando o BD
sudo mysql -u root -p

Ao iniciar o CodeSpace
    sudo service mariadb start
