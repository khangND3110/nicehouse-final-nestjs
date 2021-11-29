import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from 'src/jwt/auth.service';
import { JwtAuthGuard } from 'src/jwt/jwt-auth.guard';
import { JwtStrategy } from 'src/jwt/jwt.strategy';
import { RolesGuard } from 'src/jwt/roles.guard';
import { usersProviders } from './users.provider';
import { LocationsService } from 'src/locations/locations.service';
import { locationsProviders } from 'src/locations/locations.provider';
import { AvatarImagesService } from 'src/avatar-images/avatar-images.service';
import { avatarImagesProviders } from 'src/avatar-images/avatar-images.provider';
import { MulterModule } from '@nestjs/platform-express';
import { ApartmentFavoritesService } from 'src/apartment-favorites/apartment-favorites.service';
import { apartmentFavoritesProviders } from 'src/apartment-favorites/apartment-favorites.provider';

@Module({
  imports: [
    // MailModule,
    JwtModule.register({
      secret: 'secretKey',
      signOptions: { expiresIn: '60s' },
    }),
    // MulterModule.registerAsync({
    //   useFactory: () => ({
    //     dest: './upload',
    //   }),
    // }),
  ],
  controllers: [UsersController],
  providers: [
    AuthService,
    JwtStrategy,
    RolesGuard,
    JwtAuthGuard,
    UsersService,
    ...usersProviders,
    LocationsService,
    ...locationsProviders,
    AvatarImagesService,
    ...avatarImagesProviders,
    ApartmentFavoritesService,
    ...apartmentFavoritesProviders,
  ]
})
export class UsersModule {}
