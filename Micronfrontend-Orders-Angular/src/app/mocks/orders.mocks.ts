import { Order } from "../interfaces/order.interface";

/**
 * Datos simulados de órdenes.
 *
 * @remarks
 * Este mock se utiliza para pruebas unitarias y desarrollo local,
 * simulando la respuesta del microservicio de órdenes.
 *
 * @example
 * ```ts
 * console.log(ORDERS_MOCK);
 * ```
 */
export const ORDERS_MOCK: Order[] = [
  {
    id: '1',
    customerName: 'Juan Pérez',
    productName: 'Laptop',
    quantity: 1,
    total: 2500000,
    status: 'Pendiente',
  },
  {
    id: '2',
    customerName: 'María Gómez',
    productName: 'Celular',
    quantity: 2,
    total: 1800000,
    status: 'Enviado',
  },
  {
    id: '3',
    customerName: 'Carlos Ramírez',
    productName: 'Audífonos',
    quantity: 3,
    total: 300000,
    status: 'Entregado',
  },
  {
    id: '4',
    customerName: 'Ana Torres',
    productName: 'Teclado',
    quantity: 1,
    total: 150000,
    status: 'Cancelado',
  },
];