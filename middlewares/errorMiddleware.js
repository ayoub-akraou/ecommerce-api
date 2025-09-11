const globalErrorMiddleware = (err, req, res, next) => {
	err.statusCode = err.statusCode || 500;
	err.status = err.status || "error";
	if (process.env.NODE_ENV === "development") sendErrorForDev(err, res);
	if (process.env.NODE_ENV === "production") sendErrorForProd(err, res);
};

function sendErrorForDev(err, res) {
	res.status(err.statusCode).json({ status: err.status, err, message: err.message, stack: err.stack });
}

function sendErrorForProd(err, res) {
	res.status(err.statusCode).json({ status: err.status, message: err.message });
}
module.exports = globalErrorMiddleware;
