import { AvatarImage } from "./entities/avatar-image.entity";

export const avatarImagesProviders = [
    {
      provide: 'AVATAR_IMAGES_REPOSITORY',
      useValue: AvatarImage,
    }
  ];