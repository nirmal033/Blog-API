const express = require("express");
const router = express.Router();
const registerUser = require("../controllers/authController");

router.get("/login", (req, res) => {
    res.status(200).json({
        message: "You are on the login page"
    })
})

router.post("/register", registerUser);

module.exports = router;