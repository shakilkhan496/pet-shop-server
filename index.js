const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;



// middleware for cors middleware and json 
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send({
        status: 'pet server is running',
    })
})



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.83izqje.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {
    console.log('database connection established')
    try {
        const petsCollection = client.db("pets").collection("pet");




    }
    finally {
        //this should be not used
    }
}

run().catch(console.dir);





app.listen(port, () => {
    console.log(`server listening on port ${port}`);
})
