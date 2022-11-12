const mongoose = require('mongoose');

const ProfileFormSchema = new mongoose.Schema({
    name: {
        type: String,
        default: "",
    },
    state: {
        type: Boolean,
        default: true,
    }
});

module.exports = mongoose.model('profile_form', ProfileFormSchema);
