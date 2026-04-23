import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../../interfaces/customer.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:3004/api/customers';

  getCustomers(countCustomers: number): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.apiUrl}/${countCustomers}`);
  }
}