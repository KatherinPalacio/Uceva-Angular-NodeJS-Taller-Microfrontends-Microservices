import { fakerES_MX as faker } from "@faker-js/faker";
import { Order, OrderStatus } from "../../../domain/interfaces/order.interface";

export class OrdersService {
  private readonly statuses: OrderStatus[] = [
    "Pendiente",
    "Enviado",
    "Entregado",
    "Cancelado",
  ];

  public getOrders(countOrders: number): Order[] {
    return Array.from({ length: countOrders }, () => ({
      id: faker.string.uuid(),
      customerName: faker.person.fullName(),
      productName: faker.commerce.productName(),
      quantity: faker.number.int({ min: 1, max: 10 }),
      total: Number(faker.commerce.price({ min: 10000, max: 500000 })),
      status: faker.helpers.arrayElement(this.statuses),
    }));
  }
}