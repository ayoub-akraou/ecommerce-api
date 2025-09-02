const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });
const app = express();

app.get("/", (req, res) => {
	res.send("hello");
});

const PORT = process.env.PORT;
app.listen(PORT, (err) => {
	console.log(`server startedon PORT ${PORT}!`);
});
