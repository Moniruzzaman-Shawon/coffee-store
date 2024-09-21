const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 4000;

//middleware
app.use(cors());
app.use(express.json());

//coffeeStore
//7dKZUdI7ssGH8EcI


// const uri = "mongodb+srv://<db_username>:<db_password>@shawon.ujmk2e4.mongodb.net/?retryWrites=true&w=majority&appName=Shawon";
const uri = "mongodb+srv://coffeeStore:7dKZUdI7ssGH8EcI@shawon.ujmk2e4.mongodb.net/?retryWrites=true&w=majority&appName=Shawon";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
        ssl: true,
        tlsAllowInvalidCertificates: true
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('Coffee  server is running');
})

app.listen(port, () => {
    console.log(`Coffee server is running on ${port}`);

})