import { NextFunction, Request, Response } from 'express';

const NotFound = (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`🔎 Not Found :: ${req.originalUrl}`);
  res.status(404);
  next(error);
};

export default NotFound;
