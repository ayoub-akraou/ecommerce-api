const slugify = require("slugify");
const CategoryModel = require("../models/categoryModel");
const asyncHandler = require("express-async-handler");
const categoryModel = require("../models/categoryModel");

// @desc   Get all categories
// @route  GET /api/v1/categories
// @access Public
exports.getCategories = asyncHandler(async (req, res) => {
	const categories = await categoryModel.find();
	res.json({ results: categories.length, data: categories });
});

// @desc   Create category
// @route  /api/v1/categories
// @access Private
exports.createCategory = asyncHandler(async (req, res) => {
	const { name } = req.body;
	const category = await CategoryModel.create({ name, slug: slugify(name) });
	res.status(201).json(category);
});
