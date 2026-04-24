import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../../interfaces/customer.interface';

/**
 * Servicio encargado de la gestión de clientes.
 *
 * Proporciona métodos para obtener información de clientes
 * desde la API REST del microservicio de customers.
 *
 * @example
 * ```ts
 * constructor(private customersService: CustomersService) {}
 *
 * this.customersService.getCustomers(10).subscribe(customers => {
 *   console.log(customers);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  /**
   * Cliente HTTP de Angular para realizar peticiones a la API.
   * Se inyecta usando la función `inject`.
   */
  private readonly http = inject(HttpClient);

  /**
   * URL base del microservicio de clientes.
   */
  private readonly apiUrl = 'http://localhost:3004/api/customers';

  /**
   * Obtiene una lista de clientes desde el backend.
   *
   * @param countCustomers Número de clientes a obtener.
   * @returns Observable que emite un array de clientes.
   *
   * @example
   * ```ts
   * this.customersService.getCustomers(5).subscribe(customers => {
   *   console.log(customers);
   * });
   * ```
   */
  getCustomers(countCustomers: number): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.apiUrl}/${countCustomers}`);
  }
}