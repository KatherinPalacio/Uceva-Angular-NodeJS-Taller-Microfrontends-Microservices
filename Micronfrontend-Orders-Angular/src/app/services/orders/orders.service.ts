import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../../interfaces/order.interface';

/**
 * Servicio encargado de gestionar las operaciones relacionadas con órdenes.
 *
 * @remarks
 * Este servicio se comunica con el microservicio de órdenes
 * para obtener información mediante peticiones HTTP.
 *
 * Forma parte de la capa de acceso a datos del frontend.
 */
@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  /**
   * Cliente HTTP inyectado para realizar peticiones al backend.
   */
  private http = inject(HttpClient);

  /**
   * URL base del microservicio de órdenes.
   */
  private readonly API_URL = 'http://localhost:3003/api/orders';

  /**
   * Obtiene un listado de órdenes desde el backend.
   *
   * @param countOrders - Cantidad de órdenes a obtener
   * @returns Observable con un arreglo de órdenes
   *
   * @example
   * ```ts
   * this.ordersService.getOrders(5).subscribe(data => console.log(data));
   * ```
   */
  getOrders(countOrders: number): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.API_URL}/${countOrders}`);
  }

}