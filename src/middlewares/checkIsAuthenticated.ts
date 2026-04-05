import { Request, Response, NextFunction } from 'express';

function checkIsAuthenticated(req: Request, res: Response, next: NextFunction) {
  if (req.isAuthenticated()) return next();
  res.status(401).json({ error: 'Session Expired / Invalid. Log in again!' });
}

export default checkIsAuthenticated;
