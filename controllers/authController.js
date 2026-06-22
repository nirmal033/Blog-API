const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
    try {
        let { fullname, email, contact, password } = req.body;
        // let saltrounds = 14;
        let user = await userModel.findOne({
            email
        })

        console.log(user);
        if (user) {
            return res.status(400).json({
                message: "User is already existed"
            })
        }

        bcrypt.genSalt(14, function (err, salt) {
            bcrypt.hash(password, salt, async function (err, hash) {
                await userModel.create({
                    fullname,
                    email,
                    contact,
                    password: hash,
                })
            })
        })

        let token = jwt.sign({ email }, process.env.JWT_SECRET);
        res.cookie("token", token);

        return res.status(200).json({
            message: "User created succesfully"
        })
    } catch (err) {
        res.status(400).json({
            error: err.message
        })
    }
}

module.exports = registerUser;