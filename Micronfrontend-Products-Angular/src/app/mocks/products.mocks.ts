import { Product } from "../interfaces/products.interface";

/**
 * Datos simulados de productos.
 *
 * @remarks
 * Este mock se utiliza para pruebas unitarias y desarrollo local,
 * simulando la respuesta de un servicio de productos.
 *
 * Permite trabajar sin depender de una API real.
 *
 * @example
 * ```ts
 * console.log(PRODUCTS_MOCK);
 * ```
 */
export const PRODUCTS_MOCK: Product[] = [
    {
        id: 1,
        name: 'Leche entera',
        category: 'Lacteos',
        price: 4500,
    },
    {
        id: 2,
        name: 'Manzana roja',
        category: 'Frutas',
        price: 3200,
    }
];