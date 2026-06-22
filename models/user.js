const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        trim: true,
        required: true,
        minlength: 3,
        maxlength: 100,
    },
    contact: {
        type: String,
        default: "",
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true }
);

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;

