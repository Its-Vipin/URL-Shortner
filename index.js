const express = require('express');
const { connectToDatabase } = require('./db');
const urlRoute = require('./routes/urlRoutes');

const app = express();

connectToDatabase(process.env.MONGODB_URL)
.then(() => console.log("Database Connected"))
.catch((err) => console.log("Error connecting to database", err));

app.set('view engine', 'ejs');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));



app.use('/',urlRoute);


// Starting the server
app.listen(process.env.PORT,() => {
    console.log(`Server is running at PORT:${process.env.PORT}`);
});