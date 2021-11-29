import { Injectable } from '@nestjs/common';
import { CreateReviewFieldDto } from './dto/create-review-field.dto';
import { UpdateReviewFieldDto } from './dto/update-review-field.dto';

@Injectable()
export class ReviewFieldsService {
  create(createReviewFieldDto: CreateReviewFieldDto) {
    return 'This action adds a new reviewField';
  }

  findAll() {
    return `This action returns all reviewFields`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reviewField`;
  }

  update(id: number, updateReviewFieldDto: UpdateReviewFieldDto) {
    return `This action updates a #${id} reviewField`;
  }

  remove(id: number) {
    return `This action removes a #${id} reviewField`;
  }
}
