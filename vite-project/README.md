# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




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
        sudo mysql -u root -t

Ao iniciar o CodeSpace
    sudo service mariadb start

    é debaixo p cima aqui ó vem com nós 