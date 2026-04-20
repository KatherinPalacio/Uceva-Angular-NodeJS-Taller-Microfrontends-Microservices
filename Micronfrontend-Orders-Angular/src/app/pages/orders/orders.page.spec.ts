import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { OrdersPage } from './orders.page';
import { OrdersService } from '../../services/orders/orders.service';
import { ORDERS_MOCK } from '../../mocks/orders.mocks';

describe('OrdersPage', () => {
  let component: OrdersPage;
  let fixture: ComponentFixture<OrdersPage>;
  let ordersServiceMock: {
    getOrders: jest.Mock;
  };

  beforeEach(async () => {
    ordersServiceMock = {
      getOrders: jest.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [OrdersPage],
      providers: [
        {
          provide: OrdersService,
          useValue: ordersServiceMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(OrdersPage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    ordersServiceMock.getOrders.mockReturnValue(of(ORDERS_MOCK));

    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should load orders successfully', () => {
    ordersServiceMock.getOrders.mockReturnValue(of(ORDERS_MOCK));

    fixture.detectChanges();

    expect(ordersServiceMock.getOrders).toHaveBeenCalledWith(10);
    expect(component.orders).toEqual(ORDERS_MOCK);
    expect(component.state).toBe('success');
  });

  it('should set error state when service fails', () => {
    ordersServiceMock.getOrders.mockReturnValue(
      throwError(() => new Error('Error loading orders'))
    );

    fixture.detectChanges();

    expect(ordersServiceMock.getOrders).toHaveBeenCalledWith(10);
    expect(component.state).toBe('error');
  });
});