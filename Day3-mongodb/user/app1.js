const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const index = fs.readFileSync('./index.html');

app.use(bodyParser.urlencoded({ extended: true }));

const addUser = (message) => {
    fs.writeFile(
        './users.txt',
        `${message}\n`,
        { flag: 'a' },
        (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('done with this user');
        }
    );
};

const getUser = (name, callback) => {
    fs.readFile(
        './users.txt',
        'utf8',
        (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            const lines = result.split('\n');
            for (let line of lines) {
                if (line.startsWith(name)) {
                    callback(line.split(',')[1]);
                }
            }
            callback("")
        }
    );
};

app.get('/', (req, res) => {
    res.end(index);
});

app.post('/user', (req, res) => {
    const body = req.body;
    const data = `${body.Name},${body.Email}`;
    addUser(data);
    res.end(`
        <h1>Congratulations!</h1>
        <p>Your submission has been recorded</p>
        <a href="/">back home</a>
    `);
});

app.post('/search', (req, res) => {
    const body = req.body;
    const name = body.Name;
    console.log("searching for ... ", name);
    getUser(name, (result) => {
        res.end(`
            <h1>Your results are: ${result}</h1>
            <p>You was searching for user: ${name}</p>
            <a href="/">back home</a>
        `);
    });
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
