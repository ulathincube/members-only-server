function errorHandler(error, req, res, next) {
    console.log({ message: error.message, error });
    res.status(500).json({ error });
    next(error);
}
export default errorHandler;
//# sourceMappingURL=errorHandler.js.map