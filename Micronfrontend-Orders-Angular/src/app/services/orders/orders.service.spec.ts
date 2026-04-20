import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

import { OrdersService } from './orders.service';
import { ORDERS_MOCK } from '../../mocks/orders.mocks';

describe('OrdersService', () => {
  let service: OrdersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        OrdersService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });

    service = TestBed.inject(OrdersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get orders', () => {
    const mockOrders = ORDERS_MOCK;
    const countOrders = 4;

    service.getOrders(countOrders).subscribe((orders) => {
      expect(orders).toEqual(mockOrders);
      expect(orders.length).toBe(4);
    });

    const req = httpMock.expectOne(`http://localhost:3003/api/orders/${countOrders}`);
    expect(req.request.method).toBe('GET');

    req.flush(mockOrders);
  });
});