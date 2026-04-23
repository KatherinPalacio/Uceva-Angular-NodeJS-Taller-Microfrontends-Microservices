import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { CustomersPage } from './customers.page';
import { CustomersService } from '../../services/customers/customers.service';
import { CUSTOMERS_MOCK } from '../../mocks/customers.mocks';


describe('CustomersPage', () => {
  let component: CustomersPage;
  let fixture: ComponentFixture<CustomersPage>;
  let customersServiceSpy: any;

  beforeEach(async () => {
    customersServiceSpy = jasmine.createSpyObj('CustomersService', ['getCustomers']);

    await TestBed.configureTestingModule({
      imports: [CustomersPage],
      providers: [
        { provide: CustomersService, useValue: customersServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomersPage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    customersServiceSpy.getCustomers.and.returnValue(of(CUSTOMERS_MOCK));

    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should initialize with loading state and empty customers list', () => {
    expect(component.state).toBe('loading');
    expect(component.customers).toEqual([]);
  });

  it('should load customers successfully on ngOnInit', () => {
    customersServiceSpy.getCustomers.and.returnValue(of(CUSTOMERS_MOCK));

    fixture.detectChanges();

    expect(customersServiceSpy.getCustomers).toHaveBeenCalledWith(10);
    expect(component.customers).toEqual(CUSTOMERS_MOCK);
    expect(component.state).toBe('success');
  });

  it('should set error state when getCustomers fails', () => {
    customersServiceSpy.getCustomers.and.returnValue(
      throwError(() => new Error('Error al cargar clientes'))
    );

    fixture.detectChanges();

    expect(customersServiceSpy.getCustomers).toHaveBeenCalledWith(10);
    expect(component.state).toBe('error');
    expect(component.customers).toEqual([]);
  });
});