const express = require('express');
const router = express.Router();

router.get('*', (req, res) => {
    res.render('notfound', { title: 'Not found' });
});

module.exports = router;
