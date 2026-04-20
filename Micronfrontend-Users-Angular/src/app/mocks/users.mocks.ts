import { User } from "../interfaces/users.interface";

/**
 * Datos simulados de usuarios.
 *
 * @remarks
 * Este mock se utiliza para pruebas unitarias y desarrollo local,
 * simulando la respuesta del servicio de usuarios.
 *
 * Permite validar componentes y servicios sin depender
 * directamente de la API real.
 *
 * @example
 * ```ts
 * console.log(USERS_MOCK);
 * ```
 */
export const USERS_MOCK: User[] = [
    {
        id: 1,
        name: 'Carlos',
        lastName: 'Ramírez',
        age: 22,
        email: 'carlos.ramirez@example.com',
        engineering: 'Sistemas',
    },
    {
        id: 2,
        name: 'Ana',
        lastName: 'Gómez',
        age: 24,
        email: 'ana.gomez@example.com',
        engineering: 'Industrial',
    }
];