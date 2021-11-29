import { Module } from '@nestjs/common';
import { ReviewFieldsService } from './review-fields.service';
import { ReviewFieldsController } from './review-fields.controller';

@Module({
  controllers: [ReviewFieldsController],
  providers: [ReviewFieldsService]
})
export class ReviewFieldsModule {}
