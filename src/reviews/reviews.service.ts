import { Inject, Injectable } from '@nestjs/common';
import { Apartment } from 'src/apartments/entities/apartment.entity';
import { ReviewField } from 'src/review-fields/entities/review-field.entity';
import { User } from 'src/users/entities/user.entity';
import { CreateReviewDto } from './dto/create-review.dto';
import { Review } from './entities/review.entity';

@Injectable()
export class ReviewsService {
  constructor(
    @Inject('REVIEWS_REPOSITORY')
    private reviewsRepository: typeof Review,
  ) { }

  async getReview(): Promise<any> {
    return await this.reviewsRepository.findAll();
  }

  async getAllReview(apartmentId: number): Promise<any> {
    return await this.reviewsRepository.findAll(
      {
        where: {
          apartmentId: apartmentId
        },
        include: [User]
      });
  }

  async createReview(data: CreateReviewDto): Promise<any> {
    const reviewFields: ReviewField = {
      serviceRatings: data.serviceRatings,
      roomsRatings: data.serviceRatings,
      cleanlinessRatings: data.serviceRatings,
      foodRatings: data.serviceRatings,
    };
    return await this.reviewsRepository.create({
      userId: data.userId,
      apartmentId: data.apartmentId,
      title: data.title,
      text: data.text,
      ratings: data.ratings,
      reviewFields: reviewFields,
      reviewImages: data.reviewImages,
    });
  }

  async deleteReview(reviewId: number): Promise<any> {
    return await this.reviewsRepository.destroy({ where: { id: reviewId } });
  }
}
