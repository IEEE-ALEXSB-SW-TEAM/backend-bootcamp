const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const index = fs.readFileSync('./index.html');

app.use(bodyParser.urlencoded({ extended: true }));

const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri);

app.get('/', (req, res) => {
    res.end(index);
});

app.post('/user', async (req, res) => {
    const body = req.body;
    try {
        await client.connect();
        const newUser = {
            name: body.Name,
            email: body.Email,
        }
        console.log(newUser)
        const result = await client.db("IEEE").collection("users").insertOne(newUser);
        console.log(result)
        res.end(`
            <h1>Congratulations!</h1>
            <p>Your submission has been recorded</p>
            <a href="/">back home</a>
        `);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    } finally {
        if (client) {
            await client.close();
        }
    }

});

app.post('/search', async (req, res) => {
    const body = req.body;
    const name = body.Name;
    console.log("searching for ... ", name);
    try {
        await client.connect();
        var result = await client.db("IEEE").collection("users").findOne({name: name});
        console.log(result)
        res.end(`
            <h1>Your results are: ${JSON.stringify(result)}</h1>
            <p>You was searching for user: ${name}</p>
            <a href="/">back home</a>
        `);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    } finally {
        if (client) {
            await client.close();
        }
    }
});

app.use((req, res) => {
    res.status(404).send(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
    `);
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
