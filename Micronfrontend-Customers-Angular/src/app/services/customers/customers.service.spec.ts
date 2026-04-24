import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { CustomersService } from './customers.service';
import { CUSTOMERS_MOCK } from '../../mocks/customers.mocks';

describe('CustomersService', () => {
  let service: CustomersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CustomersService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });

    service = TestBed.inject(CustomersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('Creación del servicio', () => {
    it('debería crearse correctamente', () => {
      expect(service).toBeTruthy();
    });
  });

  describe('getCustomers', () => {
    it('debería realizar una petición GET y retornar una lista de clientes', () => {
      const countCustomers = 2;

      service.getCustomers(countCustomers).subscribe((customers) => {
        expect(customers).toEqual(CUSTOMERS_MOCK);
      });

      const req = httpMock.expectOne(`http://localhost:3004/api/customers/${countCustomers}`);
      expect(req.request.method).toBe('GET');

      req.flush(CUSTOMERS_MOCK);
    });

    it('debería propagar un error si la petición HTTP falla', () => {
      const countCustomers = 2;

      service.getCustomers(countCustomers).subscribe({
        next: () => fail('Se esperaba un error'),
        error: (error) => {
          expect(error.status).toBe(500);
        },
      });

      const req = httpMock.expectOne(`http://localhost:3004/api/customers/${countCustomers}`);
      expect(req.request.method).toBe('GET');

      req.flush('Error del servidor', { status: 500, statusText: 'Server Error' });
    });
  });
});