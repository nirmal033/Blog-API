const mongoose = require("mongoose");
const debug = require("debug");

mongoose
    .connect(`${process.env.MOGODB_URI}`)
    .then(() => {
        debug("connected");
    })
    .catch((err) => {
        debug(err);
    })


module.exports = mongoose.connection;