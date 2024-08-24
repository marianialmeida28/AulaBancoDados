const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const app = express();

app.use(cors());

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);
let collection;

async function connectDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('times');
    collection = db.collection('times');

  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
  }
}

connectDB();

app.use(express.json()); 


app.post('/times', async (req, res) => {
  try {
    const novoTime = req.body;

    //complete o código
    const result = await collection.insertOne(novoTime);
    res.status(201).json({ message: 'Time cadastrado com sucesso', timesId: result.insertedId });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao cadastrar time', error: err });
  }
});

app.get('/times', async (req, res) => {
  try {
    //complete o código(feito)

    const times = await collection.find().toArray();
    res.status(200).json(times);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar times', error: err });
  }
});

const { ObjectId } = require('mongodb');

app.get('/times/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const newId =  new ObjectId(id);

    //complete o código

    if (!times) {
      res.status(404).json({ message: 'time não encontrada' });
    } else {
      res.status(200).json(times);
    }
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar time', error: err });
  }
});

app.put('/times/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const newId =  new ObjectId(id);
    const atualizacao = req.body;

    //complete o código
    const result = await collection.updateOne( { _id: newId }, { $set: atualizacao });
    if (result.matchedCount === 0) {
      res.status(404).json({ message: 'Time não encontrada' });
    } else {
      res.status(200).json({ message: 'Time atualizada com sucesso' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Erro ao atualizar Time', error: err });
  }
});

app.delete('/times/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const newId =  new ObjectId(id);
    const result = await times.deleteOne({_id: newId})
    //complete o código

    if (result.deletedCount === 0) {
      res.status(404).json({ message: 'Time não encontrado' });
    } else {
      res.status(200).json({ message: 'Time excluído com sucesso' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Erro ao excluir Time', error: err });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
