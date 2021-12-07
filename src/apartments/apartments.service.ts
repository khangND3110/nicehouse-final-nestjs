import { Inject, Injectable } from '@nestjs/common';
import { Location } from 'src/locations/entities/location.entity';
import { Review } from 'src/reviews/entities/review.entity';
import { User } from 'src/users/entities/user.entity';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { UpdateApartmentDto } from './dto/update-apartment.dto';
import { Apartment } from './entities/apartment.entity';

@Injectable()
export class ApartmentsService {
  constructor(
    @Inject('APARTMENTS_REPOSITORY')
    private apartmentsRepository: typeof Apartment,
    @Inject('LOCATIONS_REPOSITORY')
    private locationRepository: typeof Location,
    @Inject('REVIEWS_REPOSITORY')
    private reviewRepository: typeof Review,
  ) { }

  async getAllApartments(): Promise<any> {
    return await this.apartmentsRepository.findAll(
      {
        include: [
          Location,
        ]
      }
    );
  }

  async getApartmentsOwner(id: number): Promise<any> {
    return await this.apartmentsRepository.findAll({
      where: { authorId: id },
      include: [
        Location,
      ]
    });
  }

  async getApartmentDetail(apartmentId: number): Promise<any> {
    return await this.apartmentsRepository.findOne({
      where: { id: apartmentId },
      include: [
        Location,
      ]
    });
  }

  async createApartment(data: CreateApartmentDto): Promise<any> {

    const location = await this.locationRepository.create({
      lat: data.lat,
      lng: data.lng,
      street: data.street,
      ward: data.ward,
      district: data.district,
      city: data.city,
      locationDescription: data.locationDescription,
    });

    // return data;

    return await this.apartmentsRepository.create({
      title: data.title,
      content: data.content,
      bedRoom: data.bedRoom,
      status: data.status,
      price: data.price,
      propertyType: data.propertyType,
      authorId: data.userId,
      images: data.images,
      guest: data.guest,
      amenities: data.amenities,
      locationId: location.id,
    });
  }

  async updateApartment(updateApartmentDto: UpdateApartmentDto): Promise<any> {
    const {
      lat,
      lng,
      street,
      ward,
      district,
      city,
      title,
      content,
      bedRoom,
      status,
      price,
      propertyType,
      userId,
      apartmentId,
      locationId,
      amenities,
      images
    } = updateApartmentDto;

    await this.locationRepository.update({
      lat,
      lng,
      street,
      ward,
      district,
      city,
    }, {
      where: { id: locationId },
    });

    return await this.apartmentsRepository.update({
      title,
      content,
      bedRoom,
      status,
      price,
      propertyType,
      userId,
      amenities,
      images,
      locationId: locationId,
    }, { where: { id: apartmentId } });
  }

  async deleteApartment(apartmentId: number): Promise<any> {

    const locationId = (await this.apartmentsRepository.findOne({ where: { id: apartmentId } })).locationId;

    await this.locationRepository.destroy({
      where: { id: locationId },
    });

    await this.reviewRepository.destroy({ where: { apartmentId: apartmentId } });

    return await this.apartmentsRepository.destroy({
      where: { id: apartmentId },
    });
  }
}