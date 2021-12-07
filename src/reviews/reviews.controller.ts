import { Controller, Get, Post, Body, Param, Delete, UseGuards, UseInterceptors, UploadedFiles, Req } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { JwtAuthGuard } from 'src/jwt/jwt-auth.guard';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { UploadReviewImage } from 'src/config/file.config';
import { JwtPayload } from 'src/jwt/auth.payload';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) { }

  @Get()
  async getReview(): Promise<any> {
    return await this.reviewsService.getReview();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getAllReview(@Param() params): Promise<any> {
    return await this.reviewsService.getAllReview(params.id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'images', maxCount: 3, },
  ],
    UploadReviewImage,
  ))
  async createReview(
    @UploadedFiles() files: { images?: Express.Multer.File[] },
    @Body() body: CreateReviewDto,
    @Req() request: Express.Request,
  ): Promise<any> {
    const user = request.user as JwtPayload;
    let imageFileNames = files['images'].map(item => item.path);
    body.reviewImages = imageFileNames;
    body.userId = user.id;
    body.ratings = parseInt(body.ratings.toString());
    body.apartmentId = parseInt(body.apartmentId.toString());
    return await this.reviewsService.createReview(body);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteReview(@Param() params): Promise<any> {
    return await this.reviewsService.deleteReview(params.id);
  }
}
