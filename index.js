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
    // read questions from file
    fs.readFile('./files/questions.json', (err, questions) => {
        if (err) throw err;

        // send json parsed questions object to client
        res.send(JSON.parse(questions));
    });
});

// endpoint for get submitting answers
app.post('/submit', (req, res) => {

    // read submitted user answers
    let user_answers = req.body;

    // read answers from file
    fs.readFile('./files/answers.json', (err, answers_data) => {
        if (err) throw err;

        // parse answers object from file
        const answers = JSON.parse(answers_data);

        // return if user's submitted answers are null 
        // or not of equal length with json answers
        if (user_answers == null || user_answers.length !== answers.length) return

        let score = 0; // user's score
        
        // loop through user's answers and correct answers
        for (let index = 0; index < answers.length; index++) {
            
            // check if user's answers match correct answers, by index
            if (user_answers[index] === answers[index]) {
                ++score;
            }
        }
        
        // return user's score as object
        res.send({ 'score': score } );
    });
});

if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('interface/build'));
  
    // Express serve up index.html file if it doesn't recognize route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'interface', 'build', 'index.html'));
    });
}

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
