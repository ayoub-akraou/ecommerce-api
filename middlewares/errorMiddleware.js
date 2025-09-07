const globalErrorMiddleware = (err, req, res, next) => {
	err.statusCode = err.statusCode || 500;
	err.status = err.status || "error";

	res.status(400).json({ status: err.status, err, message: err.message, stack: err.stack });
};

module.exports = globalErrorMiddleware;
