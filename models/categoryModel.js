const { Schema, model } = require("mongoose");

const categorySchema = new Schema(
	{
		name: {
			type: String,
			required: [true, "the category name is required!"],
			unique: [true, "the category name must be unique!"],
			minLength: [3, "too short category name!"],
			maxLength: [32, "too long category name!"],
		},
		slug: {
			type: String,
			lowercase: true,
		},
		image: String,
	},
	{ timestamps: true }
);

const categoryModel = model("Category", categorySchema);
module.exports = categoryModel;
