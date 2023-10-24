import { NextFunction, Request, Response } from 'express';
import ErrorResponse from '../interfaces/ErrorResponse';

const ErrorHandler = (
  error: Error,
  req: Request,
  res: Response<ErrorResponse>,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? '🚫' : error.stack,
  });
};

export default ErrorHandler;
