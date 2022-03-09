//Name:         BARRIENTOS, ABIGAIL S.
//App Name:     mid-post-act.js

const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();

//Description:  Code of POST Method to add element.
app.use(express.json());

app.get('/api/movies', (req, res) => {
    const movie = {
        id: movies.length + 1,
        title: req.body.title
    }
    movies.push(movie);
    res.send(movie);
});

app.listen(4000, () => console.log('Listening on port 4000'));