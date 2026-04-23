import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Customer, CustomerStatus } from '../../interfaces/customer.interface';

@Component({
  selector: 'app-customers-table',
  imports: [CommonModule],
  templateUrl: './customers-table.component.html',
})
export class CustomersTableComponent {
  customers = input.required<Customer[]>();

  getStatusClass(status: CustomerStatus): string {
    const statusClassMap: Record<CustomerStatus, string> = {
      Activo: 'text-bg-success',
      Inactivo: 'text-bg-secondary',
      Prospecto: 'text-bg-warning',
    };

    return statusClassMap[status];
  }
}