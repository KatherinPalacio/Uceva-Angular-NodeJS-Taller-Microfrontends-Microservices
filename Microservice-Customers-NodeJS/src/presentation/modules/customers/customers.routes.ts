import { Router } from 'express';
import { CustomersController } from './customers.controller';

export class CustomersRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new CustomersController();

    router.get('/:countCustomers', controller.getAllCustomers);

    return router;
  }
}