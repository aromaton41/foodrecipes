const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
const recipes = require('./recipes');

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 204 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const app = express();
const port = 3001;
const Cors = cors(corsOptions);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(Cors);

app.get('/api/data', (req, res) => {
    res.status(200).json({ message: 'Hello from the server!' });
});

app.get('/api/recipes', (req, res) => {
    res.status(200).json({ message: recipes });
});

app.get('/api/recipes/:id', (req, res) => {
    const response = recipes.find(recipe => recipe.id === parseInt(req.params.id));
    res.status(200).json({ message: response });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});