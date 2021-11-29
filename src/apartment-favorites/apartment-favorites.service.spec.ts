import { Test, TestingModule } from '@nestjs/testing';
import { ApartmentFavoritesService } from './apartment-favorites.service';

describe('ApartmentFavoritesService', () => {
  let service: ApartmentFavoritesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApartmentFavoritesService],
    }).compile();

    service = module.get<ApartmentFavoritesService>(ApartmentFavoritesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
