const express = require('express');
const { connectToDatabase } = require('./db');
const urlRoute = require('./routes/urlRoutes');

const app = express();
const PORT = 8000;

connectToDatabase('mongodb://localhost:27017/p1')
.then(() => console.log("Database Connected"))
.catch((err) => console.log("Error connecting to database", err));

app.set('view engine', 'ejs');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/',urlRoute);


// Starting the server
app.listen(PORT, () => {
    console.log(`Server is running at PORT:${PORT}`);
});