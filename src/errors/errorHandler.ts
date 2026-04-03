import { Request, Response, NextFunction } from 'express';

function errorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.log({ message: error.message, error });
  res.status(500).json({ error });
  next(error);
}

export default errorHandler;
