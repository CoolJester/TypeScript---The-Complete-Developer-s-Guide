import 'reflect-metadata';
import { Request, Response, NextFunction } from 'express';
import { AppRouter } from '../../AppRouter';
import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';
import { RequestHandler } from 'express';

function bodyValidators(keys: string): RequestHandler{  
  return function(req: Request, res: Response, next: NextFunction){
    if (!req.body) {
      res.status(422).send('Invalid Request');
      return;
    }

    for (const key of keys) {
      if (!req.body[key]) {
        res.status(422).send('Missing: ' + key);
        return;
      }
    }
  }
}

export function controller(routePrefix: string){
  return function(target: Function){
    const router = AppRouter.getInstance();

    for (const key in target.prototype) {
      //temp
      const routeHandler = target.prototype[key];

      //check if we have metadata
      const path = Reflect.getMetadata(MetadataKeys.path, target.prototype, key);
      const method: Methods = Reflect.getMetadata(MetadataKeys.method, target.prototype, key);
      const middlewares = Reflect.getMetadata(
        MetadataKeys.middleware,
        target.prototype,
        key
      ) || [];

      const requiredBodyProps = Reflect.getMetadata(MetadataKeys.validator, target.prototype, key) || [];      

      const validator = bodyValidators(requiredBodyProps);

      //if only we have found a path
      if (path) {
          router[method](`${routePrefix}${path}`, ...middlewares, validator, routeHandler);
      }
    }
  }
}