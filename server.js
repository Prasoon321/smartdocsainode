const path = require('path');
const express = require('express');
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser');
dotenv.config();
const app = express();
const port = 3000;
const cors = require("cors");
app.use(express.json());
app.use(cookieParser());

// Database connections
const connectmongoosedb = require("./db/mongoconnection");

// Routes
const pdfuplaod = require('./route/uplaod');
const session = require('express-session');

app.use(session({
    secret: 'your_secret_key', // replace with a secure key
    resave: false,
    saveUninitialized: true
}));
// Middleware
app.use(cors());


// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect MongoDB
connectmongoosedb();


// Routes for the form and admin
app.use('/api', pdfuplaod);
app.get('/', (req, res) => {
    res.send('This is index page '); // Home layout
});

// Start the server
app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});
