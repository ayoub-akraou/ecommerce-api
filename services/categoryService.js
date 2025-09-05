// @desc   Create category
// @route  /api/v1/categories
// @access Private
exports.createCategory = asyncHandler(async (req, res) => {
	const { name } = req.body;
	const category = await CategoryModel.create({ name, slug: slugify(name) });
	res.status(201).json(category);
});
