import { Controller, Get, Post, Body, Put, UseGuards, Req, UseInterceptors, UploadedFile, UploadedFiles } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthService } from 'src/jwt/auth.service';
import { User } from './entities/user.entity';
import { JwtPayload } from 'src/jwt/auth.payload';
import { ResponseUserDto } from './dto/response-user.dto';
import { JwtAuthGuard } from 'src/jwt/jwt-auth.guard';
import { UpdateUserDto } from './dto/update-user.dto';
import { Request } from 'express';
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { UploadUserImage } from 'src/config/file.config';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) { }

  @Post('login')
  async login(
    @Body() body: { email: string; password: string },
  ) {
    const user = await this.usersService.login(
      body.email,
      body.password,
    );
    const jwtPayload: JwtPayload = {
      id: user.id,
      email: user.email,
    };

    const response: ResponseUserDto = {
      email: user.email,
      fullName: user.fullName,
      phoneNumber: user.phoneNumber,
      content: user.content,
      accessToken: await this.authService.signPayload(jwtPayload),
    }
    return response;
  }

  @Post('register')
  async register(
    @Body() body: CreateUserDto,
  ): Promise<any> {
    await this.usersService.register(body);
    return 'Register successfully'
  }

  @Get()
  async getAll(): Promise<User[]> {
    return await this.usersService.getAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getUserInfo(
    @Req() request: Request,
    @Body() body: CreateUserDto,
  ): Promise<any> {
    const user = request.user as JwtPayload;
    return await this.usersService.findOne(user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Put('update-password')
  async updatePassword(
    @Req() request: Request,
    @Body() body: { id: number, oldPassword: string, newPassword: string }
  ): Promise<any> {
    const userRequest = request.user as JwtPayload;
    const { oldPassword, newPassword } = body;
    return await this.usersService.updatePassword(userRequest.id, oldPassword, newPassword);
  }

  @UseGuards(JwtAuthGuard)
  @Put('update-profile')
  async updateProfile(
    @Req() request: Request,
    @Body() body: UpdateUserDto
  ): Promise<any> {
    const userRequest = request.user as JwtPayload;
    body.id = userRequest.id;
    return await this.usersService.updateProfile(body);
  }

  @UseGuards(JwtAuthGuard)
  @Put('update-avatar')
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'avatar', maxCount: 1, },
    { name: 'background', maxCount: 1 },
  ],
    UploadUserImage,
  ))
  async updateUserImage(
    @UploadedFiles() files: { avatar?: Express.Multer.File[], background?: Express.Multer.File[] },
    @Req() request: Express.Request,
  ): Promise<any> {
    const user = request.user as JwtPayload;
    let avatar = files['avatar'][0].filename;
    let background = files['background'][0].filename;
    return await this.usersService.updateAvatar(
      user.id,
      `${avatar}`,
      `${background}`,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Post('apartment-favorite')
  async apartmentFavorite(
    @Req() request: Express.Request,
    @Body() body: { apartmentId: number },
  ): Promise<any> {
    const { apartmentId } = body;
    const user = request.user as JwtPayload;
    return await this.usersService.apartmentFavorite(
      user.id,
      apartmentId,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get('apartment-favorite')
  async uploadFile(
    @Req() request: Express.Request,
  ): Promise<any> {
    const user = request.user as JwtPayload;
    return await this.usersService.getApartmentFavorite(user.id);
  }
}
