const mongoose = require("mongoose");
const { Schema } = mongoose;
const categorySchema = new Schema({ name: String });

const categoryModel = mongoose.model("Category", categorySchema);
