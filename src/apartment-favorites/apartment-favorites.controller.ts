import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApartmentFavoritesService } from './apartment-favorites.service';
import { CreateApartmentFavoriteDto } from './dto/create-apartment-favorite.dto';
import { UpdateApartmentFavoriteDto } from './dto/update-apartment-favorite.dto';

@Controller('apartment-favorites')
export class ApartmentFavoritesController {
  constructor(private readonly apartmentFavoritesService: ApartmentFavoritesService) {}

  @Post()
  create(@Body() createApartmentFavoriteDto: CreateApartmentFavoriteDto) {
    return this.apartmentFavoritesService.create(createApartmentFavoriteDto);
  }

  @Get()
  findAll() {
    return this.apartmentFavoritesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.apartmentFavoritesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApartmentFavoriteDto: UpdateApartmentFavoriteDto) {
    return this.apartmentFavoritesService.update(+id, updateApartmentFavoriteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apartmentFavoritesService.remove(+id);
  }
}
