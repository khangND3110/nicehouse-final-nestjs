import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, UseInterceptors, UploadedFiles, Put } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { UploadApartmentImage } from 'src/config/file.config';
import { JwtPayload } from 'src/jwt/auth.payload';
import { JwtAuthGuard } from 'src/jwt/jwt-auth.guard';
import { ApartmentsService } from './apartments.service';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { UpdateApartmentDto } from './dto/update-apartment.dto';

@Controller('apartments')
export class ApartmentsController {
  constructor(private readonly apartmentsService: ApartmentsService) { }

  @Get()
  async getAllApartments(): Promise<any> {
    return await this.apartmentsService.getAllApartments();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/owner')
  async getApartsmentOwner(
    @Req() request: Express.Request,
  ): Promise<any> {
    const user = request.user as JwtPayload;
    return await this.apartmentsService.getApartmentsOwner(user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getApartmentDetail(
    @Param() params,
  ): Promise<any> {
    return await this.apartmentsService.getApartmentDetail(params.id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  // @UseInterceptors(FilesInterceptor('images', 3, UploadApartmentImage,))
  async createApartment(
    @Body() body: CreateApartmentDto,
    // @UploadedFiles() images: Array<Express.Multer.File>,
  ) {
    // let imageFileNames = images.map(item => item.filename);
    // body.images = imageFileNames;
    return await this.apartmentsService.createApartment(body);
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  @UseInterceptors(FilesInterceptor('images', 3, UploadApartmentImage,))
  async updateApartment(
    @Body() body: UpdateApartmentDto,
    @UploadedFiles() images: Array<Express.Multer.File>,
  ) {
    let imageFileNames = images.map(item => item.filename);
    body.images = imageFileNames;
    return await this.apartmentsService.updateApartment(body);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteApartment(@Param() params) {
    return await this.apartmentsService.deleteApartment(params.id);
  }
}
