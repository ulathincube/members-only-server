import { Response, Request } from 'express';

function notFound(req: Request, res: Response) {
  res.status(404).json({ message: 'Error 404: Resource not found!' });
}

export default notFound;
