import { Module } from '@nestjs/common';
import { ApartmentsService } from './apartments.service';
import { ApartmentsController } from './apartments.controller';
import { apartmentsProviders } from './apartments.provider';
import { LocationsService } from 'src/locations/locations.service';
import { locationsProviders } from 'src/locations/locations.provider';
import { ReviewsService } from 'src/reviews/reviews.service';
import { reviewsProviders } from 'src/reviews/reviews.provider';

@Module({
  controllers: [ApartmentsController],
  providers: [
    ApartmentsService,
    ...apartmentsProviders,
    LocationsService,
    ...locationsProviders,
    ReviewsService,
    ...reviewsProviders,
  ]
})
export class ApartmentsModule {}
