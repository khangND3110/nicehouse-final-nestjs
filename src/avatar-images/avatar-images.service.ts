import { Injectable } from '@nestjs/common';
import { CreateAvatarImageDto } from './dto/create-avatar-image.dto';
import { UpdateAvatarImageDto } from './dto/update-avatar-image.dto';

@Injectable()
export class AvatarImagesService {
  create(createAvatarImageDto: CreateAvatarImageDto) {
    return 'This action adds a new avatarImage';
  }

  findAll() {
    return `This action returns all avatarImages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} avatarImage`;
  }

  update(id: number, updateAvatarImageDto: UpdateAvatarImageDto) {
    return `This action updates a #${id} avatarImage`;
  }

  remove(id: number) {
    return `This action removes a #${id} avatarImage`;
  }
}
