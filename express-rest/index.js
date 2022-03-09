//Name:         BARRIENTOS, ABIGAIL S.
//App Name:     index.js

const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();

//Description:  Code for the Express Application
app.get('/', (req, res) => {
    res.send('My New App!');
});

//Description:  Code for the resource
app.get('/api/heroes', (req, res) => {
    res.send(['Superman', 'Iron Man', 'Batman', 'Hulk']);
});

//Description:  Code for the Single Params 
app.get('/api/heroes:id', (req, res) => {
    res.send(req.params.id);
});

//Description:  Code for the Multi Params 
app.get('/api/heroes:id/:publisher', (req, res) => {
    res.send([req.params.id, req.query]);
});

//Description:  Code for the Query Parameter 
app.get('/api/heroes:title/:publisher', (req, res) => {
    res.send([req.params, req.query]);
});

app.listen(3000, () => console.log('Listening on port 3000'));