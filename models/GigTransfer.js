const mongoose = require('mongoose');

const GigTransferSchema = new mongoose.Schema({
    gig_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'gig'
    },
    fromAddress: {
        type: String,
        default: "",
    },
    toAddress: {
        type: String,
        default: "",
    },
    fromUsername: {
        type: String,
        default: "",
    },
    toUsername: {
        type: String,
        default: "",
    },
    price: {
        type: Number,
        default: 0
    },
    state: {
        type: Boolean,
        default: null
    }
});

module.exports = mongoose.model('gig_transfer_info', GigTransferSchema);
