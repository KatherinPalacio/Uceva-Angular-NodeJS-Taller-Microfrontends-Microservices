import { fakerES_MX as faker } from '@faker-js/faker';
import { Customer } from '../../../domain/interfaces/customer.interface';

export class CustomersService {
  private readonly statuses = ['Activo', 'Inactivo', 'Prospecto'];

  public getCustomers(countCustomers: number): Customer[] {
    return Array.from({ length: countCustomers }, (_, index) => ({
      id: index + 1,
      fullName: faker.person.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      city: faker.location.city(),
      documentNumber: faker.string.numeric(10),
      status: faker.helpers.arrayElement(this.statuses) as Customer['status'],
    }));
  }
}