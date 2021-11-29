import { Module } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { ReviewsController } from './reviews.controller';
import { reviewsProviders } from './reviews.provider';

@Module({
  controllers: [ReviewsController],
  providers: [
    ReviewsService,
    ...reviewsProviders,
  ]
})
export class ReviewsModule {}
