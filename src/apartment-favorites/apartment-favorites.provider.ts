import { ApartmentFavorite } from "./entities/apartment-favorite.entity";

export const apartmentFavoritesProviders = [
    {
        provide: 'APARTMENT_FAVORITES_REPOSITORY',
        useValue: ApartmentFavorite,
    }
]