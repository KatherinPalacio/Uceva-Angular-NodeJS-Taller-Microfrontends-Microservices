import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOMERS_MOCK } from '../../mocks/customers.mocks';
import { CustomersTableComponent } from './customers-table.component';

describe('CustomersTableComponent', () => {
  let component: CustomersTableComponent;
  let fixture: ComponentFixture<CustomersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomersTableComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomersTableComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('customers', CUSTOMERS_MOCK);
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('debería renderizar una fila por cada cliente', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(CUSTOMERS_MOCK.length);
  });

  it('debería mostrar los datos del cliente en cada columna', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const customer = CUSTOMERS_MOCK[index];

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(customer.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(customer.fullName);
      expect(columns[2].nativeElement.textContent.trim()).toBe(customer.email);
      expect(columns[3].nativeElement.textContent.trim()).toBe(customer.phone);
      expect(columns[4].nativeElement.textContent.trim()).toBe(customer.city);
      expect(columns[5].nativeElement.textContent.trim()).toBe(customer.documentNumber);
      expect(columns[6].nativeElement.textContent.trim()).toBe(customer.status);
    });
  });

  it('debería devolver la clase CSS correcta según el estado', () => {
    expect(component.getStatusClass('Activo')).toBe('text-bg-success');
    expect(component.getStatusClass('Inactivo')).toBe('text-bg-secondary');
    expect(component.getStatusClass('Prospecto')).toBe('text-bg-warning');
  });
});