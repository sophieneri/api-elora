
# API Elora Cosméticos

## Sobre o projeto

A API Elora Cosméticos foi desenvolvida para gerenciar
os produtos de uma loja de cosméticos.

O projeto permite cadastrar, consultar, atualizar e
excluir produtos utilizando Node.js e MongoDB.

## Tecnologias utilizadas

- Node.js
- Express
- MongoDB Atlas
- JavaScript
- Thunder Client

## Funcionalidades

- Cadastrar produtos.
- Listar produtos.
- Consultar produto pelo ID.
- Atualizar produtos.
- Excluir produtos.

## Informações dos produtos

- Nome
- Marca
- Categoria
- Preço
- Quantidade

## Rotas

| Método | Rota | Função |
|---|---|---|
| POST | /produtos | Cadastrar |
| GET | /produtos | Listar |
| GET | /produtos/:id | Consultar |
| PUT | /produtos/:id | Atualizar |
| DELETE | /produtos/:id | Excluir |

## Como executar

1. Instale as dependências:

```bash
npm install
```

2. Configure o arquivo `.env` com a variável `MONGO_URI`.

3. Inicie a API:

```bash
npm start
```

## Banco de dados

- Banco: elora
- Coleção: produtos

## Acesso à API

A API Elora Cosméticos está publicada no Render.

**Link da API:**

https://api-elora.onrender.com/produtos

## Autora

Desenvolvido por Sophie.