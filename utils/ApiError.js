// @desc   this class is responsible about opertion errors (errors i can predict!)
class ApiError extends Error {
	constructor(message, statusCode) {
		super(message);
		this.statusCode = statusCode;
		this.status = String(statusCode).startsWith("4") ? "fail" : "error";
		this.isOperational = true;
	}
}

module.exports = ApiError;
