import { PartialType } from '@nestjs/mapped-types';
import { CreateReviewFieldDto } from './create-review-field.dto';

export class UpdateReviewFieldDto extends PartialType(CreateReviewFieldDto) {}
