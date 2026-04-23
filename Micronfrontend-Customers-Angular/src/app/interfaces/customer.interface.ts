export type CustomerStatus = 'Activo' | 'Inactivo' | 'Prospecto';

export interface Customer {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  city: string;
  documentNumber: string;
  status: CustomerStatus;
}