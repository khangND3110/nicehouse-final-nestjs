import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ApartmentsModule } from './apartments/apartments.module';
import { ReviewsModule } from './reviews/reviews.module';
import { DatabaseModule } from './database/database.module';
import { TransformModule } from './interceptors/transform.module';
import { AllExceptionModule } from './filter-exception/all-exception.module';

@Module({
  imports: [
    UsersModule,
    ApartmentsModule,
    ReviewsModule,
    DatabaseModule,
    TransformModule,
    AllExceptionModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule { }
