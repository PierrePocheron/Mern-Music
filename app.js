// app.js

const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

// routes
const books = require('./routes/api/books');
const artistes = require('./routes/api/artistes');
const albums = require('./routes/api/albums');




const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/books', books);
app.use('/api/artistes', artistes);
app.use('/api/albums', albums);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));