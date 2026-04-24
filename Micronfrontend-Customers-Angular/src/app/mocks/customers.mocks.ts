import { Customer } from '../interfaces/customer.interface';

/**
 * Datos simulados de clientes.
 *
 * @remarks
 * Este mock se utiliza para pruebas unitarias y desarrollo local,
 * simulando la respuesta del servicio de clientes.
 *
 * Permite validar componentes y servicios sin depender
 * directamente de la API real del microservicio de customers.
 *
 * @example
 * ```ts
 * console.log(CUSTOMERS_MOCK);
 * ```
 */
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