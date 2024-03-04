const express = require('express');
const router = express.Router();
const urlModel = require('../models/urlModel');
const { createShortURL } = require('../controllers/urlController');
let currentUrl;

// router.get('/', (req, res) => {
//     currentUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
// });

router.get('/', (req, res) => {
    res.render('../views/index.ejs');
});

router.get('/u/:id', async (req, res) => {
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

// have to currentUrl