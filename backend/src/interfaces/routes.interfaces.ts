import Express from 'express';
import { Query, Send } from 'express-serve-static-core';

// Requests
export interface RequestBody<B = any> extends Express.Request {
  body: B;
}

export interface RequestQuery<Q extends Query = any> extends Express.Request {
  query: Q;
}

export interface Request<B = any, Q extends Query = any>
  extends Express.Request {
  body: B;
  query: Q;
}

// Response
export interface Response<J = {}> extends Express.Response {
  json: Send<J, this>;
}
