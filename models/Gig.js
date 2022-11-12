const mongoose = require('mongoose');

const GigSchema = new mongoose.Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    username: {
        type: String,
        default: "",
    },
    avatar: {
        type: String,
        default: "img/default_avatar.png",
    },
    title: {
        type: String,
        default: "",
    },
    company: {
        type: String,
        default: "",
    },
    location: {
        type: String,
        default: "",
    },
    overview: {
        type: String,
        default: "",
    },
    price: {
        type: Number
    },
    walletAddress: {
        type: String,
        default: null,
    },
    state: {
        type: Boolean,
        default: false
    },
    clientUsername: {
        type: String,
        default: "",
    },
    clientAvatar: {
        type: String,
        default: "img/default_avatar.png",
    },
    contact: {
        type: String,
        default: 'none'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('gig', GigSchema);
