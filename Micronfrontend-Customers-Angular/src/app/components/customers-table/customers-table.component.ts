import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Customer, CustomerStatus } from '../../interfaces/customer.interface';

/**
 * Componente de tabla de clientes.
 *
 * Se utiliza para mostrar un listado de clientes en una tabla,
 * mostrando información como id, nombre completo, correo, teléfono,
 * ciudad, número de documento y estado.
 *
 * @remarks
 * Este componente recibe los clientes desde un componente padre
 * a través del input requerido `customers`.
 *
 * También utiliza el método `getStatusClass` para asignar una clase
 * visual de Bootstrap según el estado del cliente.
 *
 * Forma parte de la capa de presentación de la aplicación.
 *
 * @example
 * ```html
 * <app-customers-table [customers]="customersList"></app-customers-table>
 * ```
 */
@Component({
  selector: 'app-customers-table',
  imports: [CommonModule],
  templateUrl: './customers-table.component.html',
})
export class CustomersTableComponent {
  /**
   * Listado de clientes que se mostrarán en la tabla.
   *
   * @remarks
   * Este input requerido permite pasar un array de clientes
   * desde un componente padre. Cada cliente debe cumplir
   * la interfaz `Customer`.
   */
  customers = input.required<Customer[]>();

  /**
   * Obtiene la clase CSS correspondiente al estado del cliente.
   *
   * @param status Estado actual del cliente.
   * @returns Clase CSS de Bootstrap asociada al estado.
   *
   * @remarks
   * Se utiliza para representar visualmente el estado del cliente:
   * - 'Activo' → 'text-bg-success'
   * - 'Inactivo' → 'text-bg-secondary'
   * - 'Prospecto' → 'text-bg-warning'
   *
   * @example
   * ```ts
   * const badgeClass = this.getStatusClass('Activo');
   * ```
   */
  getStatusClass(status: CustomerStatus): string {
    const statusClassMap: Record<CustomerStatus, string> = {
      Activo: 'text-bg-success',
      Inactivo: 'text-bg-secondary',
      Prospecto: 'text-bg-warning',
    };

    return statusClassMap[status];
  }
}