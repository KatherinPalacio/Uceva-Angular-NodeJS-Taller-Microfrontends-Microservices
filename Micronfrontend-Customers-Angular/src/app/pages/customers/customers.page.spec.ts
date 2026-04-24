import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { CustomersPage } from './customers.page';
import { CustomersService } from '../../services/customers/customers.service';
import { CUSTOMERS_MOCK } from '../../mocks/customers.mocks';

describe('CustomersPage', () => {
  let component: CustomersPage;
  let fixture: ComponentFixture<CustomersPage>;
  let customersServiceMock: { getCustomers: jest.Mock };

  beforeEach(async () => {
    customersServiceMock = {
      getCustomers: jest.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [CustomersPage],
      providers: [
        { provide: CustomersService, useValue: customersServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomersPage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    customersServiceMock.getCustomers.mockReturnValue(of(CUSTOMERS_MOCK));

    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should initialize with init state and empty customers list', () => {
    expect(component.state).toBe('init');
    expect(component.customers).toEqual([]);
  });

  it('should load customers successfully on ngOnInit', () => {
    customersServiceMock.getCustomers.mockReturnValue(of(CUSTOMERS_MOCK));

    fixture.detectChanges();

    expect(customersServiceMock.getCustomers).toHaveBeenCalledWith(10);
    expect(component.customers).toEqual(CUSTOMERS_MOCK);
    expect(component.state).toBe('success');
  });

  it('should set error state when getCustomers fails', () => {
    customersServiceMock.getCustomers.mockReturnValue(
      throwError(() => new Error('Error al cargar clientes'))
    );

    fixture.detectChanges();

    expect(customersServiceMock.getCustomers).toHaveBeenCalledWith(10);
    expect(component.state).toBe('error');
    expect(component.customers).toEqual([]);
  });
});