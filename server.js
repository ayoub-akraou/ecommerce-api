const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const mongoose = require("mongoose");
dotenv.config({ path: "config.env" });
const app = express();

// middlewares
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

// routes
app.get("/", (req, res) => {
	res.send("hello");
});

const PORT = process.env.PORT;
app.listen(PORT, (err) => {
	console.log(`server startedon PORT ${PORT}!`);
});
