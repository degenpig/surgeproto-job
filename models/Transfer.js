const mongoose = require('mongoose');

const TransferSchema = new mongoose.Schema({
    from: {
        type: String,
        default: "",
    },
    to: {
        type: String,
        default: "",
    },
    price: {
        type: Number,
        default: 0
    },
    state: {
        type: String,
        default: ""
    }
});

module.exports = mongoose.model('transfer_info', TransferSchema);
