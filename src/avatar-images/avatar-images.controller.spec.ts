import { Test, TestingModule } from '@nestjs/testing';
import { AvatarImagesController } from './avatar-images.controller';
import { AvatarImagesService } from './avatar-images.service';

describe('AvatarImagesController', () => {
  let controller: AvatarImagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AvatarImagesController],
      providers: [AvatarImagesService],
    }).compile();

    controller = module.get<AvatarImagesController>(AvatarImagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
