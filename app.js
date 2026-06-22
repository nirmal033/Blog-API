require("dotenv").config();

const express = require("express");
const app = express();
const authRouter = require("./routes/authRouter");
const cookieParser = require("cookie-parser");

require("./config/db");

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


// Routes
app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
    console.log("Server is running");
    res.status(200).json({
        message: "API Working",
    })
});

// Server
app.listen(3000, () => {
    console.log("server is running");
})