const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

const studentsController = require('./controllers/students');
const errorController = require('./controllers/error');

app.use('/', studentsController);
app.use('/', errorController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
