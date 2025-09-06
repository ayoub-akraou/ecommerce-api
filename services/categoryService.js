const slugify = require("slugify");
const CategoryModel = require("../models/categoryModel");
const asyncHandler = require("express-async-handler");
const categoryModel = require("../models/categoryModel");

// @desc   Get all categories
// @route  GET /api/v1/categories
// @access Public
exports.getCategories = asyncHandler(async (req, res) => {
	const page = Number(req.query.page) || 1;
	const limit = Number(req.query.limit) || 2;
	const skip = (page - 1) * limit;
	const categories = await categoryModel.find().skip(skip).limit(limit);
	res.json({ results: categories.length, data: categories });
});

// @desc   Create category
// @route  /api/v1/categories
// @access Private
exports.createCategory = asyncHandler(async (req, res) => {
	const { name } = req.body;
	const category = await CategoryModel.create({ name, slug: slugify(name) });
	res.status(201).json({ success: true, message: "Category created successfully", data: category });
});

// @desc   Get a category by id
// @route  GET /api/categories/v1/:id
// @access Public

exports.getCategory = asyncHandler(async (req, res) => {
	const { id } = req.params;
	const category = await categoryModel.findById(id);
	if (!category) res.status(404).json({ success: false, message: "category not found!" });
	res.json({ success: true, category });
});

// @desc   Update a specific category
// @route  PUT /api/categories/v1/:id
// @access Private
exports.updateCategory = asyncHandler(async (req, res) => {
	const { id } = req.params;
	const { name } = req.body;
	const category = await categoryModel.findOneAndUpdate({ _id: id }, { name, slug: slugify(name) }, { new: true });
	if (!category) res.status(404).json({ success: false, message: "category not found!" });
	res.json({ success: true, message: "category updated successfully!", data: category });
});
