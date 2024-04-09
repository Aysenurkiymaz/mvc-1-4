const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

const studentsController = require('./controllers/students');
const errorController = require('./controllers/error');

app.use(bodyParser.urlencoded({ extended: true }));


app.post('/add-student', studentsController.addStudent);
app.get('/success', studentsController.getAddingNewStudentSuccessPage);


app.get('/', studentsController.getAddNewStudentPage);

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render('Home', { title: 'Home' });
});

app.get('/success', (req, res) => {
  res.render('Success', { title: 'Success' });
});

app.get('/students-list', (req, res) => {
  res.render('List', { title: 'List' });
});

app.post('/add-student', (req, res) => {
  
  res.redirect('/students-list');
});

app.use(errorController.getNotFoundPage);

app.use((req, res, next) => {
  res.status(404).render('NotFound', { title: 'Not Found' });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
