//Name:         BARRIENTOS, ABIGAIL S.
//App Name:     mid-get-act.js

const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();

//Description:  Code of Array for the GET Method
const movies = [{
    id: 1,
    title: 'Superman'
},
{
    id: 2,
    title: 'Iron Man'
    
},
{
    id: 3,
    title: 'Batman'
    
}];

//Description:  Code to GET All Movies
app.get('/api/movies', (req, res) => {
    res.send(movies);
});

//Description:  Code to find specific movie
app.get('/api/movies/:id', (req, res)=> {
    const movie = movies.find(h => h.id === parseInt(req.params.id));
    if (!movie) return res.status(404).send('The movie with the given ID was not found.')
    res.send(movie);
});

app.listen(4000, () => console.log('Listening on port 4000'));