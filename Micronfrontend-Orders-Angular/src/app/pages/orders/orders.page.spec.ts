import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { OrdersPage } from './orders.page';
import { OrdersService } from '../../services/orders/orders.service';

describe('OrdersPage', () => {
  let component: OrdersPage;
  let fixture: ComponentFixture<OrdersPage>;
  let ordersServiceSpy: jasmine.SpyObj<OrdersService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('OrdersService', ['getAllOrders']);

    await TestBed.configureTestingModule({
      imports: [OrdersPage],
      providers: [
        { provide: OrdersService, useValue: spy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(OrdersPage);
    component = fixture.componentInstance;
    ordersServiceSpy = TestBed.inject(OrdersService) as jasmine.SpyObj<OrdersService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load orders successfully', () => {
    const mockOrders = [
      {
        id: '1',
        customerName: 'Juan Pérez',
        productName: 'Laptop',
        quantity: 2,
        total: 250000,
        status: 'Enviado',
      },
    ];

    ordersServiceSpy.getAllOrders.and.returnValue(of(mockOrders));

    component.ngOnInit();

    expect(ordersServiceSpy.getAllOrders).toHaveBeenCalledWith(10);
    expect(component.orders).toEqual(mockOrders);
    expect(component.state).toBe('success');
  });

  it('should set error state when service fails', () => {
    ordersServiceSpy.getAllOrders.and.returnValue(throwError(() => new Error('Error al cargar órdenes')));

    component.ngOnInit();

    expect(ordersServiceSpy.getAllOrders).toHaveBeenCalledWith(10);
    expect(component.state).toBe('error');
  });
});