import { Component, OnInit, inject } from '@angular/core';
import { OrdersTableComponent } from '../../components/orders-table/orders-table.component';
import { AlertComponent } from '../../components/alert/alert.component';
import { Order } from '../../interfaces/order.interface';
import { State } from '../../interfaces/state.interface';
import { OrdersService } from '../../services/orders/orders.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [OrdersTableComponent, AlertComponent],
  templateUrl: './orders.page.html',
})
export class OrdersPage implements OnInit {
  private ordersService = inject(OrdersService);

  orders: Order[] = [];
  state: State = 'loading';

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