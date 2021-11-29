import { Test, TestingModule } from '@nestjs/testing';
import { ReviewFieldsController } from './review-fields.controller';
import { ReviewFieldsService } from './review-fields.service';

describe('ReviewFieldsController', () => {
  let controller: ReviewFieldsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReviewFieldsController],
      providers: [ReviewFieldsService],
    }).compile();

    controller = module.get<ReviewFieldsController>(ReviewFieldsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
