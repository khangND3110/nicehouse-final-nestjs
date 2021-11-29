import { Test, TestingModule } from '@nestjs/testing';
import { ReviewFieldsService } from './review-fields.service';

describe('ReviewFieldsService', () => {
  let service: ReviewFieldsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReviewFieldsService],
    }).compile();

    service = module.get<ReviewFieldsService>(ReviewFieldsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
