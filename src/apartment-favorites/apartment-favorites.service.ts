import { Injectable } from '@nestjs/common';
import { CreateApartmentFavoriteDto } from './dto/create-apartment-favorite.dto';
import { UpdateApartmentFavoriteDto } from './dto/update-apartment-favorite.dto';

@Injectable()
export class ApartmentFavoritesService {
  create(createApartmentFavoriteDto: CreateApartmentFavoriteDto) {
    return 'This action adds a new apartmentFavorite';
  }

  findAll() {
    return `This action returns all apartmentFavorites`;
  }

  findOne(id: number) {
    return `This action returns a #${id} apartmentFavorite`;
  }

  update(id: number, updateApartmentFavoriteDto: UpdateApartmentFavoriteDto) {
    return `This action updates a #${id} apartmentFavorite`;
  }

  remove(id: number) {
    return `This action removes a #${id} apartmentFavorite`;
  }
}
