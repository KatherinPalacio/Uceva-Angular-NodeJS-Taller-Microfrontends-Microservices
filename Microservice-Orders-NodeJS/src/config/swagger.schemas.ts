/**
 * @openapi
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       description: Representa una orden del sistema
 *       required:
 *         - id
 *         - customerName
 *         - productName
 *         - quantity
 *         - total
 *         - status
 *       properties:
 *         id:
 *           type: string
 *           example: "550e8400-e29b-41d4-a716-446655440000"
 *         customerName:
 *           type: string
 *           example: Juan Pérez
 *         productName:
 *           type: string
 *           example: Laptop Gamer
 *         quantity:
 *           type: number
 *           example: 2
 *         total:
 *           type: number
 *           example: 250000
 *         status:
 *           type: string
 *           enum:
 *             - Pendiente
 *             - Enviado
 *             - Entregado
 *             - Cancelado
 *           example: Enviado
 */
export {};