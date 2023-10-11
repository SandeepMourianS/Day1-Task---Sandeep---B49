const mongoose = require('mongoose');

const UrlSchema = mongoose.Schema({
    longUrl: {
        type: String,
        required: true,
        useUnifiedTopology: true
    },
    shortUrl: {
        type: String,
        unique : true,
        useUnifiedTopology: true
    },
    clickCount: {
        type: Number,
        default : 0,
        useUnifiedTopology: true
    },
})

const UrlModel = mongoose.model('urlshort', UrlSchema);

module.exports = { UrlModel };