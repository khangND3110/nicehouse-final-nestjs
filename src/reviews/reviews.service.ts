import { Inject, Injectable } from '@nestjs/common';
import { Apartment } from 'src/apartments/entities/apartment.entity';
import { CreateReviewDto } from './dto/create-review.dto';
import { Review } from './entities/review.entity';

@Injectable()
export class ReviewsService {
  constructor(
    @Inject('REVIEWS_REPOSITORY')
    private reviewsRepository: typeof Review,
  ) { }

  async getAllReview(apartmentId: number): Promise<any> {
    return await this.reviewsRepository.findAll({ where: { apartmentId: apartmentId } });
  }
  
  async createReview(data: CreateReviewDto): Promise<any> {
    return await this.reviewsRepository.create(data);
  }
  
  async deleteReview(reviewId: number): Promise<any> {
    return await this.reviewsRepository.destroy({ where: { id: reviewId } });
  }
}
