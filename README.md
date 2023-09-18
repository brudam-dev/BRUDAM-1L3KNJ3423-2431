
# [BRUDAM-2023-09-18](https://docs.google.com/document/d/1C4EaB1wSfm8OE_a2MK_5bfV6Au1m90142OSNIQDlEr8/edit?usp=sharing)

> Esse projeto consiste no desenvolvimento de API (endpoints) para serviço na área de logística e transporte. Atuamos no contexto de gestão de pedidos de entrega, oferecendo uma solução para empresas de transporte e seus clientes. Uma plataforma para o gerenciamento de pedidos. 


- **Node**
- **Docker Compose**
- **MySQL**

## Quickstart

Depois de clonar o repositório, para rodar localmente basta seguir os passos abaixo.

Certifique se você possui o [Docker](https://docs.docker.com/get-docker/) instalado na sua máquina.

1. Dentro do diretório do projeto, execute o comando

    ```
    docker-compose up -d
    ```

2. Rode as instruções de banco no arquivo 

    ```
    database.sql
    ```
3. Espere o servidor subir, você pode validar isso com o log ``` Servidor rodando na porta 3000 ```

## Containers

Estrutura dos arquivos:

```
├── api-node-swaggeer-docker
│   ├── adminer - PORT: 8080
│   ├── app- - PORT: 3000
│   └── dpApp- PORT: 3306
└──

```

1. ``` adminer ``` Você pode acessar o servidor MySQL na parte administrativa pelo  ``` http://localhost:8080/ ```

## Endpoints


1. Registrar um usuário.
   ``` POST ```
    ```
     http://localhost:3000/v1/register
    ```
    ```
    {
    "username": "string",
    "password": "string"
    }
    ```

2. Logar com usuário. ``` POST ```
    ```
    http://localhost:3000/v1/login
    ``` 

    ```
    {
    "username": "string",
    "password": "string"
    }
    ```
- Atenção, próximos endpoints são rotas autenticadas, necessário passar nos headers authorization o token retornado no endpoint ao logar 

3. Gerar ordem de entrega.  ``` POST ```
    ```
    http://localhost:3000/v1/delivery
    ```

    ```
    {
        "remetente": "AMAZON - ECOMERCE BRASIL",
        "destinatario": "GUILHERME OLIVEIRA", 
        "frete": 12.4,
        "invoice": [32132141324214, 124213232421321, 41244324324323, 5654656456546]
    }
    ```

4. Listagem de entregas pelo ID.  ``` GET ```
    ```
    http://localhost:3000/v1/delivery/{id}
    ```

4. Atualizando dados de uma ordem de entrega passando o ID da mesma na URL e no corpo apenas os campos a serem editados.  ``` PUT ```
    ```
    http://localhost:3000/v1/delivery/{id}
    ```
    ```
    {
        "remetente": "AMAZON - ECOMERCE BRASI2L",
        "destinatario": "GUILHERME OLIVEIRA1", 
        "frete": 12.4
    }
    ```

4. Deletando ordem de entrega  ``` DELETE ```
    ```
    http://localhost:3000/v1/delivery/{id}
    ```

Mais informações sobre o projeto [Clique aqui](https://docs.google.com/document/d/1C4EaB1wSfm8OE_a2MK_5bfV6Au1m90142OSNIQDlEr8/edit?usp=sharing)

This project is licensed under the [MIT](https://en.wikipedia.org/wiki/MIT_License) license.
Create by [Guilherme Oliveira](https://github.com/guglieelmor).

