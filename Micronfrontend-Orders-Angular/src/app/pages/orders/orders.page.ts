import { Component, OnInit, inject } from '@angular/core';
import { OrdersTableComponent } from '../../components/orders-table/orders-table.component';
import { AlertComponent } from '../../components/alert/alert.component';
import { Order } from '../../interfaces/order.interface';
import { State } from '../../interfaces/state.interface';
import { OrdersService } from '../../services/orders/orders.service';

/**
 * Componente contenedor de órdenes.
 *
 * @remarks
 * Se encarga de consumir el servicio de órdenes y gestionar
 * los estados de la interfaz (loading, success, error).
 *
 * Este componente actúa como capa de presentación
 * y delega la visualización en `OrdersTableComponent`.
 *
 * @example
 * ```html
 * <app-orders></app-orders>
 * ```
 */
@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [OrdersTableComponent, AlertComponent],
  templateUrl: './orders.page.html',
})
export class OrdersPage implements OnInit {

  /**
   * Servicio de órdenes inyectado para consumo de API.
   */
  private ordersService = inject(OrdersService);

  /**
   * Lista de órdenes obtenidas desde el backend.
   */
  orders: Order[] = [];

  /**
   * Estado actual de la vista.
   *
   * @remarks
   * Puede ser:
   * - 'loading'
   * - 'success'
   * - 'error'
   */
  state: State = 'loading';

  /**
   * Método del ciclo de vida que se ejecuta al iniciar el componente.
   *
   * @returns void
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.ordersService.getOrders(10).subscribe({
      next: (orders) => {
        this.orders = orders;
        this.state = 'success';
      },
      error: () => {
        this.state = 'error';
      }
    });
  }
}