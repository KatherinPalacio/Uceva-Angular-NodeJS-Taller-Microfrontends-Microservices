import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { OrdersTableComponent } from './orders-table.component';
import { ORDERS_MOCK } from '../../mocks/orders.mocks';

describe('OrdersTableComponent', () => {
  let component: OrdersTableComponent;
  let fixture: ComponentFixture<OrdersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersTableComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OrdersTableComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('orders', ORDERS_MOCK);
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('debería renderizar una fila por cada orden', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(ORDERS_MOCK.length);
  });

  it('debería mostrar los datos de la orden en cada columna', () => {
    const firstRowColumns = fixture.debugElement
      .queryAll(By.css('tbody tr'))[0]
      .queryAll(By.css('td'));

    expect(firstRowColumns[0].nativeElement.textContent.trim()).toBe(ORDERS_MOCK[0].id);
    expect(firstRowColumns[1].nativeElement.textContent.trim()).toBe(ORDERS_MOCK[0].customerName);
    expect(firstRowColumns[2].nativeElement.textContent.trim()).toBe(ORDERS_MOCK[0].productName);
    expect(firstRowColumns[3].nativeElement.textContent.trim()).toBe(String(ORDERS_MOCK[0].quantity));
    expect(firstRowColumns[4].nativeElement.textContent.trim()).toBe('$2,500,000.00');
    expect(firstRowColumns[5].nativeElement.textContent.trim()).toBe(ORDERS_MOCK[0].status);
  });
});