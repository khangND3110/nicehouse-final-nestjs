import { Test, TestingModule } from '@nestjs/testing';
import { ReviewImagesController } from './review-images.controller';
import { ReviewImagesService } from './review-images.service';

describe('ReviewImagesController', () => {
  let controller: ReviewImagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReviewImagesController],
      providers: [ReviewImagesService],
    }).compile();

    controller = module.get<ReviewImagesController>(ReviewImagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
