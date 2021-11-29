import { Test, TestingModule } from '@nestjs/testing';
import { ApartmentFavoritesController } from './apartment-favorites.controller';
import { ApartmentFavoritesService } from './apartment-favorites.service';

describe('ApartmentFavoritesController', () => {
  let controller: ApartmentFavoritesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApartmentFavoritesController],
      providers: [ApartmentFavoritesService],
    }).compile();

    controller = module.get<ApartmentFavoritesController>(ApartmentFavoritesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
