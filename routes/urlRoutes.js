const express = require('express');
const router = express.Router();

const { createShortURL } = require('../controllers/urlController');

router.get('/', (req, res) => {
    res.render('../views/index.ejs');
});

router.post('/shorten', createShortURL);

module.exports = router;