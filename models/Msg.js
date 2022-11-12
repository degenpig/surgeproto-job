const mongoose = require('mongoose');

const Msg = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    opponent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    msg: {
        type: String,
        default: ""
    },
    direction: {
        type: String,
        default: "come"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('msg', Msg);
