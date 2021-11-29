import { PartialType } from '@nestjs/mapped-types';
import { CreateAvatarImageDto } from './create-avatar-image.dto';

export class UpdateAvatarImageDto extends PartialType(CreateAvatarImageDto) {}
