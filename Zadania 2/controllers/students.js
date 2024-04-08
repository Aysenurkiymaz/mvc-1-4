const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home', { title: 'Add new student' });
});

router.post('/add-student', (req, res) => {
  
    res.send('New student added successfully!');
});

module.exports = router;
