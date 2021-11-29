import { Apartment } from "./entities/apartment.entity";

export const apartmentsProviders = [
    {
        provide: 'APARTMENTS_REPOSITORY',
        useValue: Apartment,
    }
]