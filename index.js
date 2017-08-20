const express = require('express');
const bodyParser = require('body-parser');
const subTransformer = require('./lib/subtitleTransformer').transformSubs;

// Initialize the server-side app
const app = express();
app.set('view engine', 'pug');
app.use('/stills', express.static('stills'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Paths
app.get('/', (req, res) => res.render('index', { title: 'Hey', message: 'Hello there!' }));
app.post('/sub', (req, res) => res.send(subTransformer(req.body)));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
