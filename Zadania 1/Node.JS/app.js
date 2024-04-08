const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('Home', { pageTitle: 'Home' });
});

app.get('/success', (req, res) => {
  res.render('Success', { pageTitle: 'Success' });
});

app.get('/students-list', (req, res) => {
  res.render('List', { pageTitle: 'Students List' });
});

app.post('/add-student', (req, res) => {
  res.redirect('/addStudent');
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});