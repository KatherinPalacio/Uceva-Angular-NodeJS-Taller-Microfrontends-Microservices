import { Customer } from '../interfaces/customer.interface';

export const CUSTOMERS_MOCK: Customer[] = [
  {
    id: 1,
    fullName: 'Carlos Ramírez',
    email: 'carlos.ramirez@example.com',
    phone: '3001234567',
    city: 'Tuluá',
    documentNumber: '1111111111',
    status: 'Activo',
  },
  {
    id: 2,
    fullName: 'Ana Gómez',
    email: 'ana.gomez@example.com',
    phone: '3019876543',
    city: 'Cali',
    documentNumber: '2222222222',
    status: 'Prospecto',
  },
];