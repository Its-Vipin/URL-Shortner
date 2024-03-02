const express = require('express');
const router = express.Router();
const urlModel = require('../models/urlModel');
const { createShortURL } = require('../controllers/urlController');

router.get('/', (req, res) => {
    res.render('../views/index.ejs');
});

router.get('/:id', async (req, res) => {
    const shortId = req.params.id;
    const url = await urlModel.findOneAndUpdate({
        newUrlId: shortId
    },{
        $push: { 
        visitHistory: { 
            timestamp: Date.now()
        }
    }});
    const redirectURL = url.redirectURL;
    if(!redirectURL){
        return res.status(404).json({
            error: 'URL not found'
        });
    }
    res.redirect(redirectURL);
})

router.post('/shorten', createShortURL);

module.exports = router;