import { NextFunction, Request, Response } from "express";
// import { DatabaseError } from "pg";

const errorHandler = (err: unknown, _req: Request, _res: Response, next: NextFunction) =>  {
  if (err instanceof Error) {
    console.log('code reached!!!!!!!!!!!!!!!!!!!!!',err.stack);
  }

  next();
};

export default { errorHandler };