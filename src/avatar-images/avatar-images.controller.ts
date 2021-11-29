import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AvatarImagesService } from './avatar-images.service';
import { CreateAvatarImageDto } from './dto/create-avatar-image.dto';
import { UpdateAvatarImageDto } from './dto/update-avatar-image.dto';

@Controller('avatar-images')
export class AvatarImagesController {
  constructor(private readonly avatarImagesService: AvatarImagesService) {}

  @Post()
  create(@Body() createAvatarImageDto: CreateAvatarImageDto) {
    return this.avatarImagesService.create(createAvatarImageDto);
  }

  @Get()
  findAll() {
    return this.avatarImagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.avatarImagesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAvatarImageDto: UpdateAvatarImageDto) {
    return this.avatarImagesService.update(+id, updateAvatarImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.avatarImagesService.remove(+id);
  }
}
