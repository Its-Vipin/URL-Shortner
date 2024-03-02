const shortid = require('shortid');
const urlModel = require('../models/urlModel');

const createShortURL = async (req, res) => {

        const body = req.body;
        if(!body.url){
            return res.status(404).json({
                error: 'url is required'
            });
        }

        const originalURL = body.url;
        const existingURL = await urlModel.findOne({redirectURL: originalURL}); 
        let shortId;
        if(existingURL){
            shortId = existingURL.newUrlId;
        }
        else{
            shortId = shortid();
            await urlModel.create({
                newUrlId: shortId,
                redirectURL: originalURL,
                visirHistory: [],
            });
        }
        

        return res.render('index', { id : shortId});
}

module.exports = { createShortURL };