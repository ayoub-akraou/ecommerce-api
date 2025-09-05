const categoryModel = require("../models/categoryModel.js");

exports.createCategory = (req, res) => {
	console.log(req.body.name);

	const name = req.body.name;
	const newCategory = new categoryModel({ name });
	newCategory
		.save()
		.then((doc) => res.json(doc))
		.catch((err) => console.error(err));
};
