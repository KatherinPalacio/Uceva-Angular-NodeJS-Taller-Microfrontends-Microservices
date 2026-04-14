export type OrderStatus = "Pendiente" | "Enviado" | "Entregado" | "Cancelado";

export interface Order {
  id: string;
  customerName: string;
  productName: string;
  quantity: number;
  total: number;
  status: OrderStatus;
}