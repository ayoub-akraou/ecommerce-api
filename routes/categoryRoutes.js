const express = require("express");
const { createCategory, getCategories } = require("../services/categoryService");

const router = express.Router();

router.route("/").get(getCategories).post(createCategory);

module.exports = router;
