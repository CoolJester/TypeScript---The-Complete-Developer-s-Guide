import express from 'express';

export class AppRouter{
  private static instance: express.Router;

  static getInstance(): express.Router{
    //check the instance
    if (!AppRouter.instance) {
      AppRouter.instance = express.Router();
    }

    return AppRouter.instance;
  }
}