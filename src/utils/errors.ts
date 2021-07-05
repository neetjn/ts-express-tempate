import { Response } from 'express';
import { IErrorDto } from '../mediatypes/error';

export const NotFoundError = (res: Response, description: string): Error => {
  res.status(404);
  const error: IErrorDto = {
    error: 'Resource Not Found',
    description,
    statusCode: 404,
  };
  res.json(error);
  return new Error(JSON.stringify(error));
};
