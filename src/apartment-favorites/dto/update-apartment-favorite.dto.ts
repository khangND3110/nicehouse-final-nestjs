import { PartialType } from '@nestjs/mapped-types';
import { CreateApartmentFavoriteDto } from './create-apartment-favorite.dto';

export class UpdateApartmentFavoriteDto extends PartialType(CreateApartmentFavoriteDto) {}
