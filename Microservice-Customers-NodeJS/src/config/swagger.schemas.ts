/**
 * @openapi
 * components:
 *   schemas:
 *     Customer:
 *       type: object
 *       description: Representa un cliente del sistema
 *       required:
 *         - id
 *         - fullName
 *         - email
 *         - phone
 *         - city
 *         - documentNumber
 *         - status
 *       properties:
 *         id:
 *           type: string
 *           example: 550e8400-e29b-41d4-a716-446655440000
 *         fullName:
 *           type: string
 *           example: Carlos Ramírez
 *         email:
 *           type: string
 *           format: email
 *           example: carlos.ramirez@example.com
 *         phone:
 *           type: string
 *           example: 3001234567
 *         city:
 *           type: string
 *           example: Tuluá
 *         documentNumber:
 *           type: string
 *           example: 1111111111
 *         status:
 *           type: string
 *           enum:
 *             - Activo
 *             - Inactivo
 *             - Prospecto
 *           example: Activo
 */
export {};