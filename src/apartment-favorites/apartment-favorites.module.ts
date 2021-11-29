import { Module } from '@nestjs/common';
import { ApartmentFavoritesService } from './apartment-favorites.service';
import { ApartmentFavoritesController } from './apartment-favorites.controller';
import { apartmentFavoritesProviders } from './apartment-favorites.provider';

@Module({
  controllers: [ApartmentFavoritesController],
  providers: [
    ApartmentFavoritesService,
    ...apartmentFavoritesProviders,
  ]
})
export class ApartmentFavoritesModule {}
