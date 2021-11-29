import { Test, TestingModule } from '@nestjs/testing';
import { AvatarImagesService } from './avatar-images.service';

describe('AvatarImagesService', () => {
  let service: AvatarImagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AvatarImagesService],
    }).compile();

    service = module.get<AvatarImagesService>(AvatarImagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
