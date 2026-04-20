/**
 * Tipo de estado de una orden.
 *
 * @remarks
 * Restringe los estados posibles a los valores definidos
 * por el microservicio de órdenes.
 *
 * @example
 * ```ts
 * const estado: OrderStatus = 'Enviado';
 * ```
 */
export type OrderStatus = 'Pendiente' | 'Enviado' | 'Entregado' | 'Cancelado';

/**
 * Interfaz que representa una orden.
 *
 * Contiene la información básica necesaria para mostrar una orden
 * en la tabla o en cualquier componente de listado.
 *
 * @remarks
 * Cada orden debe tener un `id` único, el nombre del cliente,
 * el producto solicitado, la cantidad, el total y un estado válido.
 *
 * @example
 * ```ts
 * const orden: Order = {
 *   id: '550e8400-e29b-41d4-a716-446655440000',
 *   customerName: 'Juan Pérez',
 *   productName: 'Laptop',
 *   quantity: 2,
 *   total: 250000,
 *   status: 'Enviado'
 * };
 * ```
 */
export interface Order {
  /** Identificador único de la orden */
  id: string;

  /** Nombre del cliente */
  customerName: string;

  /** Nombre del producto solicitado */
  productName: string;

  /** Cantidad de productos en la orden */
  quantity: number;

  /** Valor total de la orden */
  total: number;

  /** Estado actual de la orden */
  status: OrderStatus;
}