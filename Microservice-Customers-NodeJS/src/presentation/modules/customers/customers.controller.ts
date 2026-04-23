import { Request, Response } from 'express';
import { CustomersService } from './customers.service';

export class CustomersController {
  private readonly customersService = new CustomersService();

  public getAllCustomers = (req: Request, res: Response) => {
    const { countCustomers } = req.params;
    const customers = this.customersService.getCustomers(Number(countCustomers));

    setTimeout(() => {
      res.status(200).json(customers);
    }, 1000);
  };
}