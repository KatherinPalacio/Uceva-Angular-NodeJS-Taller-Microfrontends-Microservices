import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Order, OrderStatus } from '../../interfaces/order.interface';

/**
 * Componente encargado de mostrar una tabla con el listado de órdenes.
 *
 * @remarks
 * Este componente recibe un arreglo de órdenes mediante un input
 * y las representa en una tabla dentro de la interfaz.
 *
 * Forma parte de la capa de presentación del microfrontend.
 */
@Component({
  selector: 'app-orders-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders-table.component.html',
})
export class OrdersTableComponent {

  /**
   * Lista de órdenes a mostrar en la tabla.
   */
  orders = input.required<Order[]>();

  /**
   * Devuelve la clase visual según el estado de la orden.
   *
   * @param status Estado actual de la orden.
   * @returns Clase CSS para el badge.
   */
  getStatusClass(status: OrderStatus): string {
    const statusClassMap: Record<OrderStatus, string> = {
      Pendiente: 'text-bg-warning',
      Enviado: 'text-bg-primary',
      Entregado: 'text-bg-success',
      Cancelado: 'text-bg-danger',
    };

    return statusClassMap[status];
  }

}