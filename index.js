// Importando as bibliotecas
const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');

// Criando o APP
const app = express();
app.use(express.json());

// Criando a conexão com o banco
const client = new MongoClient(process.env.MONGO_URI);
const produtos = client.db('elora').collection('produtos');

// Cadastrar produto
app.post('/produtos', async (req, res) => {
    const novo_produto = await produtos.insertOne(req.body);
    res.status(201).json(novo_produto);
});

// Listar todos os produtos
app.get('/produtos', async (req, res) => {
    const lista = await produtos.find().toArray();
    res.json(lista);
});

// Consultar um produto específico
app.get('/produtos/:id', async (req, res) => {

    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ mensagem: 'ID inválido!' });
    }

    const produto_especifico = await produtos.findOne({
        _id: new ObjectId(req.params.id)
    });

    res.json(produto_especifico);
});

// Atualizar produto
app.put('/produtos/:id', async (req, res) => {

    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ mensagem: 'ID inválido!' });
    }

    const produto_atualizado = await produtos.updateOne(
        { _id: new ObjectId(req.params.id) },
        { $set: req.body }
    );

    res.json(produto_atualizado);
});

// Excluir produto
app.delete('/produtos/:id', async (req, res) => {

    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ mensagem: 'ID inválido!' });
    }

    const produto_excluido = await produtos.deleteOne({
        _id: new ObjectId(req.params.id)
    });

    res.json(produto_excluido);
});

// Conectando ao MongoDB e iniciando a API
client.connect()
    .then(() => {
        console.log('CONECTADO AO MONGO COM SUCESSO');

        app.listen(process.env.PORT || 3000, () => {
            console.log('API RODANDO NA PORTA 3000');
        });
    })
    .catch((erro) => {
        console.log('ERRO:', erro.message);
    });