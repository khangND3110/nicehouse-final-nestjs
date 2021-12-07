import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, UseInterceptors, UploadedFiles, Put, Res } from '@nestjs/common';
import { FileFieldsInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { join } from 'path';
import { Observable, of } from 'rxjs';
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

  @Get(':id')
  async getApartmentDetail(
    @Param() params,
  ): Promise<any> {
    return await this.apartmentsService.getApartmentDetail(params.id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'images', maxCount: 2, },
  ],
    UploadApartmentImage,
  ))
  async createApartment(
    @Req() request: Express.Request,
    @Body() body: CreateApartmentDto,
    @UploadedFiles() files: { images?: Express.Multer.File[] },
  ) {
    const user = request.user as JwtPayload;
    let imageFileNames = files['images'].map(item => item.path);
    body.images = imageFileNames;
    body.userId = user.id;
    body.bedRoom = parseInt(body.bedRoom.toString());
    body.guest = parseInt(body.guest.toString());
    body.price = parseInt(body.price.toString());
    body.amenities = body.amenities.toString().split(',');
    return await this.apartmentsService.createApartment(body);
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'images', maxCount: 2, },
  ],
    UploadApartmentImage,
  ))
  async updateApartment(
    @Req() request: Express.Request,
    @Body() body: UpdateApartmentDto,
    @UploadedFiles() files: { images?: Express.Multer.File[] },
  ) {
    const user = request.user as JwtPayload;
    let imageFileNames = files['images'].map(item => item.path);
    body.images = imageFileNames;
    body.userId = user.id;
    body.bedRoom = parseInt(body.bedRoom.toString());
    body.guest = parseInt(body.guest.toString());
    body.price = parseInt(body.price.toString());
    body.amenities = body.amenities.toString().split(',');
    return await this.apartmentsService.updateApartment(body);
  }

  @Get('image/:uploads/:apartment-image/:timestamp/:filename')
  async downloadImage(
    @Param('uploads') uploads,
    @Param('apartment-image') apartmentImage,
    @Param('timestamp') timestamp,
    @Param('filename') filename,
    @Res() res,
  ): Promise<any> {
    const response = res.sendFile(
      join(process.cwd(), `./${uploads}/apartment-image/${timestamp}/${filename}`),
    );
    return of(response);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteApartment(@Param() params) {
    return await this.apartmentsService.deleteApartment(params.id);
  }
}
