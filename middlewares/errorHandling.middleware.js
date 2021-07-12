import { ValidationError } from 'express-validation';

// eslint-disable-next-line no-unused-vars
export default function errorHandlingMiddleware(err, req, res, next) {
  // eslint-disable-next-line no-param-reassign
  err.statusCode = err.statusCode || 400;
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err);
  }
  return err.customMessage || err.message
    ? res.status(err.statusCode).json({
        statusCode: err.statusCode,
        message: err.customMessage || err.message
      })
    : res
        .status(err.statusCode)
        .json({ statusCode: err.statusCode, message: err });
}
