import { Module } from '@nestjs/common';
import { AvatarImagesService } from './avatar-images.service';
import { AvatarImagesController } from './avatar-images.controller';
import { avatarImagesProviders } from './avatar-images.provider';

@Module({
  controllers: [AvatarImagesController],
  providers: [
    AvatarImagesService,
    ...avatarImagesProviders,
  ]
})
export class AvatarImagesModule {}
