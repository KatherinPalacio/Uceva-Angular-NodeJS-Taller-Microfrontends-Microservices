import { Routes } from '@angular/router';
import { CustomersPage   } from './pages/customers/customers.page';

/**
 * Definición de las rutas principales de la aplicación.
 *
 * @remarks
 * Este archivo contiene la configuración de enrutamiento
 * utilizada por Angular Router para mapear las URLs
 * a los componentes correspondientes.
 *
 * Incluye:
 * - Rutas de navegación principales
 * - Redirección por defecto para rutas no existentes
 *
 * @see {@link CustomersPage}
 */
export const routes: Routes = [
  /**
   * Ruta de usuarios.
   *
   * @remarks
   * Renderiza el componente `CustomersPage`, encargado
   * de mostrar y gestionar el listado de usuarios.
   */
  { path: '', loadComponent: () => import('./pages/customers/customers.page').then((m) => m.CustomersPage)},
];