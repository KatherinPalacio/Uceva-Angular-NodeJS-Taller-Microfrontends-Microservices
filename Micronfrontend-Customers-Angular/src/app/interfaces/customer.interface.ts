/**
 * Interfaz que representa un cliente del sistema.
 *
 * Contiene la información básica necesaria para mostrar un cliente
 * en tablas o componentes de listado dentro del microfrontend de customers.
 *
 * @remarks
 * Cada cliente debe tener un `id` único, nombre completo,
 * correo electrónico válido, número de teléfono,
 * ciudad de residencia, número de documento y un estado definido.
 *
 * @example
 * ```ts
 * const cliente: Customer = {
 *   id: 1,
 *   fullName: 'Carlos Ramírez',
 *   email: 'carlos.ramirez@example.com',
 *   phone: '3001234567',
 *   city: 'Tuluá',
 *   documentNumber: '1111111111',
 *   status: 'Activo'
 * };
 * ```
 */
export interface Customer {

  /** Identificador único del cliente */
  id: number;

  /** Nombre completo del cliente */
  fullName: string;

  /** Correo electrónico del cliente */
  email: string;

  /** Número de teléfono del cliente */
  phone: string;

  /** Ciudad de residencia del cliente */
  city: string;

  /** Número de documento del cliente */
  documentNumber: string;

  /** Estado actual del cliente */
  status: CustomerStatus;
}

/**
 * Tipo de estado de un cliente.
 *
 * @remarks
 * Este tipo restringe los estados posibles de un cliente a:
 * - 'Activo'
 * - 'Inactivo'
 * - 'Prospecto'
 *
 * Se utiliza principalmente para representar el estado del cliente
 * en la interfaz de usuario, como badges o etiquetas visuales.
 *
 * @example
 * ```ts
 * const estado: CustomerStatus = 'Activo';
 * ```
 */
export type CustomerStatus = 'Activo' | 'Inactivo' | 'Prospecto';