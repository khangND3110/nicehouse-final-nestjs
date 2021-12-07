import { Inject, Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { Location } from 'src/locations/entities/location.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { AvatarImage } from 'src/avatar-images/entities/avatar-image.entity';
import { Op, where } from 'sequelize';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApartmentFavorite } from 'src/apartment-favorites/entities/apartment-favorite.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: typeof User,
    @Inject('LOCATIONS_REPOSITORY')
    private locationRepository: typeof Location,
    @Inject('AVATAR_IMAGES_REPOSITORY')
    private avatarImagesRepository: typeof AvatarImage,
    @Inject('APARTMENT_FAVORITES_REPOSITORY')
    private apartmentFavoritesRepository: typeof ApartmentFavorite,
  ) { }

  async getAll(): Promise<User[]> {
    return await this.usersRepository.findAll();
  }

  async login(email: string, password: string): Promise<User> {
    const user: User = await this.usersRepository.findOne({
      where: {
        email: email.toLowerCase(),
      },
      include: [
        Location,
        AvatarImage,
      ],
      raw: true,
      nest: true,
    });
    if (!user) {
      return undefined;
    }
    const isMatch = await bcrypt.compare(password, user.password);
    delete user.password;
    return isMatch ? user : undefined;
  }

  async register(data: CreateUserDto): Promise<any> {
    data.password = await bcrypt.hash(data.password, 10);
    const user = await this.usersRepository.create(data);
    return user;
  }

  async getUserAvatar(id: number): Promise<any> {
    return await this.avatarImagesRepository.findOne({
      where: {
        userId: id,
      },
      raw: true,
      nest: true,
    });
  }

  async findOne(id: number): Promise<User> {
    return await this.usersRepository.findOne({
      where: {
        id: id,
      },
      include: [
        Location,
        AvatarImage,
      ],
      raw: true,
      nest: true,
    });
  }

  async updatePassword(
    id: number,
    oldPassword: string,
    newPassword: string,
  ): Promise<any> {
    let user = await this.findOne(id);
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (isMatch) {
      user.password = await bcrypt.hash(newPassword, 10);
      return await this.usersRepository.update({ password: await bcrypt.hash(newPassword, 10) },
        {
          where: { id: id }
        });
    } else {
      return undefined;
    }
  }

  async updateProfile(info: UpdateUserDto): Promise<any> {
    const { id, fullName, phoneNumber, content } = info;
    let user = await this.findOne(id);
    user.fullName = fullName;
    user.phoneNumber = phoneNumber;
    user.content = content;
    return await this.usersRepository.update(user, {
      where: { id: id },
    })
  }

  async updateAvatar(id: number, avatarUrl: string, backgroundUrl: string): Promise<any> {
    const avatar = await this.avatarImagesRepository.findOne({
      where: {
        userId: id,
      },
    })
    if (avatar != null) {
      return await this.avatarImagesRepository.update({
        avatarUrl: avatarUrl,
        backgroundUrl: backgroundUrl,
        userId: id,
      }, {
        where: { userId: id }
      });
    } else {
      return await this.avatarImagesRepository.create({
        avatarUrl: avatarUrl,
        backgroundUrl: backgroundUrl,
        userId: id,
      });
    }
  }

  async apartmentFavorite(userId: number, apartmentId: number): Promise<any> {
    const favorite = this.apartmentFavoritesRepository.findOne({
      where: {
        [Op.and]: [
          { userId: userId },
          { apartmentId: apartmentId }
        ],
      },
    });

    if (favorite != null) {
      return await this.apartmentFavoritesRepository.destroy({
        where: {
          [Op.and]: [
            { userId: userId },
            { apartmentId: apartmentId }
          ],
        }
      });
    } else {
      return await this.apartmentFavoritesRepository.create({
        userId: userId,
        apartmentId: apartmentId,
      });
    }
  }

  async getApartmentFavorite(userId: number): Promise<any> {
    const favorites = this.apartmentFavoritesRepository.findAll({
      where: { userId: userId },
      },
    );
    return favorites;
  }
}
