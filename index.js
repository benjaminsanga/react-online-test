const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());

app.use(
    express.urlencoded({
      extended: true
    })
  )
  
  app.use(express.json())

const PORT = 8000;

app.get('/getQuestions', (req, res) => {
    fs.readFile('./questions.json', (err, questions) => {
        if (err) throw err;
        res.send(JSON.parse(questions));
    });
});

app.post('/submit', (req, res) => {
    let user_answers = req.body;
    fs.readFile('./answers.json', (err, answers_data) => {
        if (err) throw err;
        const answers = JSON.parse(answers_data);
        if (user_answers == null || user_answers.length !== answers.length) return

        let score = 0;
        for (let index = 0; index < answers.length; index++) {
            // console.log(typeof user_answers[index], typeof answers[index]);
            if (user_answers[index] === answers[index]) {
                ++score;
            }
        }
        console.log(score);
        res.send({ 'score': score } );
    });
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
