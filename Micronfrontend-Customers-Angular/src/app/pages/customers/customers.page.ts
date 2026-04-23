import { Component, inject } from '@angular/core';
import { CustomersTableComponent } from '../../components/customers-table/customers-table.component';
import { Customer } from '../../interfaces/customer.interface';
import { CustomersService } from '../../services/customers/customers.service';
import { State } from '../../interfaces/state.interface';
import { AlertComponent } from '../../components/alert/alert.component';

/**
 * Componente contenedor de clientes.
 *
 * Se utiliza para gestionar y mostrar un listado de clientes
 * utilizando el componente `CustomersTableComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `CustomersService`
 * para obtener los clientes y pasarlos al componente de tabla.
 * Forma parte de la capa de presentación de la aplicación.
 *
 */
@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  imports: [CustomersTableComponent, AlertComponent],
})
export class CustomersPage {
  /**
   * Listado de clientes obtenidos desde el servicio.
   * @type {Customer[]}
   */
  customers: Customer[] = [];

  /**
   * Estado actual del componente.
   *
   * @default 'init'
   */
  state: State = 'init';

  /**
   * Servicio para obtener clientes.
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private customersService = inject(CustomersService);

  /**
   * Inicializa el componente y carga los clientes.
   * @remarks
   * Se suscribe al método `getCustomers()` del servicio y
   * asigna los datos recibidos a la propiedad `customers`.
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.customersService.getCustomers(10).subscribe({
      next: (customers) => {
        this.customers = customers;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error);
        this.state = 'error';
      },
    });
  }
}