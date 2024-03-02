const express = require('express');

const urlRoute = require('./routes/router');


const app = express();
const PORT = 8000;


// Middlewares
app.use('/',urlRoute);


// Starting the server
app.listen(PORT, () => {
    console.log(`Server is running at PORT:${PORT}`);
});