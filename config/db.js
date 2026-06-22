const mongoose = require("mongoose");
const debug = require("debug")("development:mongoose");

mongoose
    .connect(`${process.env.MONGODB_URI}`)
    .then(() => {
        console.log("conncted");
        // debug("connected");
    })
    .catch((err) => {
        console.log(err);
        // debug(err);
    })


module.exports = mongoose.connection;