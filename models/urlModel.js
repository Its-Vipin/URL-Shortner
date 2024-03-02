const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    newUrlId: {
        type: String,
        required: true,
        unique: true,
    },
    redirectURL: {
        type: String,
        required: true,
    },
    visirHistory: [{
        timestamp: {
            type: Number,
        }
    }]
}, {timestamps: true});

const database = mongoose.model('url', urlSchema);

module.exports = database;