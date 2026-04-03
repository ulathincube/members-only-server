import { Request, Response, NextFunction } from 'express';

function getUser(req: Request, res: Response, next: NextFunction) {
  const user = req.user;

  if (user) return next();
  res.status(401).json({ error: 'Session Expired / Invalid. Log in again!' });
}

export default getUser;
