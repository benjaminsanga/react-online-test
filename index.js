const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());

const PORT = 8000;

app.get('/getQuestions', (req, res) => {
    fs.readFile('./questions.json', (err, data) => {
        if (err) throw err;
        res.send(JSON.parse(data));
    });
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

console.log('This is after the read call');
