import { Module } from '@nestjs/common';
import { ReviewImagesService } from './review-images.service';
import { ReviewImagesController } from './review-images.controller';

@Module({
  controllers: [ReviewImagesController],
  providers: [ReviewImagesService]
})
export class ReviewImagesModule {}
