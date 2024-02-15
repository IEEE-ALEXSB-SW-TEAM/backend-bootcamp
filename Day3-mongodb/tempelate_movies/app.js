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

app.get('/films', async (req, res) => {
    console.log("lol")
    try {
        await client.connect();
        var result = await client.db("movies").collection("myMovies").find().toArray();
        result = result.map((film) => ({ title: film.title, year: film.year }))
        console.log(result)
        res.end(`
            <h1>Our Films are:</h1>
            <p>${JSON.stringify(result)}</p>
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

app.post('/addFilm', async (req, res) => {
    const body = req.body;
    try {
        await client.connect();
        const newFilm = {
            title: body.title,
            directory: body.dir,
            year: body.year,
            geners: body.geners.split(",")
        }
        console.log(newFilm)
        const result = await client.db("movies").collection("myMovies").insertOne(newFilm);
        console.log(result)
        res.end(`
            <h1>You have added ${body.title} successfully</h1>
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
    const title = body.title;
    console.log("searching for ... ", title);
    try {
        await client.connect();
        var result = await client.db("movies").collection("myMovies").findOne({title: title});
        console.log(result)
        res.end(`
            <h1>Your results are: ${JSON.stringify(result)}</h1>
            <p>You was searching for film: ${title}</p>
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

app.post('/update', async (req, res) => {
    const body = req.body;
    try {
        await client.connect();
        const updatedFilm = {
            title: body.title,
            directory: body.dir,
            year: body.year,
            geners: body.geners.split(",")
        }
        console.log(updatedFilm)
        const result = await client.db("movies").collection("myMovies")
            .updateOne({ title: body.oldtitle }, { $set: updatedFilm });
        console.log(result)
        res.end(`
            <h1>You have updated ${body.oldtitle} successfully</h1>
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
app.post('/delete', async (req, res) => {
    const body = req.body;
    const title = body.title;
    console.log("deleting ... ", title);
    try {
        await client.connect();
        var result = await client.db("movies").collection("myMovies").deleteOne({title: title});
        console.log(result)
        res.end(`
            <h1>You have deleted ${body.title} successfully</h1>
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
