const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const mongoose = require("mongoose");
const dbConnection = require("./config/database.js");

const { Schema } = mongoose;

dotenv.config({ path: "config.env" });

// express app
const app = express();
// connect to database
dbConnection();

// middlewares
app.use(express.json());
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

// routes
const categoryRoute = require("./routes/categoryRoutes.js");
app.use("/api/v1/categories", categoryRoute);
app.get("/", (req, res) => {
	res.send("hello");
});

const PORT = process.env.PORT;
app.listen(PORT, (err) => {
	console.log(`server started on PORT ${PORT}!`);
});
