import { Request, Response } from "express";
import { OrdersService } from "./orders.service";

export class OrdersController {
  private readonly ordersService = new OrdersService();

  public getAllOrders = (req: Request, res: Response) => {
    const { countOrders } = req.params;
    const orders = this.ordersService.getOrders(Number(countOrders));

    setTimeout(() => {
      res.status(200).json(orders);
    }, 1000);
  };
}