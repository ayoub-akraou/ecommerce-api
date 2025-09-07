const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config({ path: "config.env" });
const dbConnection = require("./config/database.js");
const ApiError = require("./utils/ApiError.js");
const globalErrorMiddleware = require("./middlewares/errorMiddleware.js");

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

app.use((req, res, next) => {
	const err = new ApiError(`Can't find this route: ${req.originalUrl}!`, 400);
	next(err);
});
// global error handling
app.use(globalErrorMiddleware);

const PORT = process.env.PORT;
app.listen(PORT, (err) => {
	console.log(`server started on PORT ${PORT}!`);
});
