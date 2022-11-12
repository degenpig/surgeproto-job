const mongoose = require('mongoose');

const JobTransferSchema = new mongoose.Schema({
    job_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'job'
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

module.exports = mongoose.model('job_transfer_info', JobTransferSchema);
