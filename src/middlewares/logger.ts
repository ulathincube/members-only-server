import { NextFunction, Request, Response } from 'express';

function logger(req: Request, res: Response, next: NextFunction) {
  console.log({ url: req.url, user: req.user, session: req.session });
  next();
}

export default logger;
