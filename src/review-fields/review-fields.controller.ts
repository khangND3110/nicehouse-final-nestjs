import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReviewFieldsService } from './review-fields.service';
import { CreateReviewFieldDto } from './dto/create-review-field.dto';
import { UpdateReviewFieldDto } from './dto/update-review-field.dto';

@Controller('review-fields')
export class ReviewFieldsController {
  constructor(private readonly reviewFieldsService: ReviewFieldsService) {}

  @Post()
  create(@Body() createReviewFieldDto: CreateReviewFieldDto) {
    return this.reviewFieldsService.create(createReviewFieldDto);
  }

  @Get()
  findAll() {
    return this.reviewFieldsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reviewFieldsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReviewFieldDto: UpdateReviewFieldDto) {
    return this.reviewFieldsService.update(+id, updateReviewFieldDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reviewFieldsService.remove(+id);
  }
}
