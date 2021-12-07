export class CreateApartmentDto {
    lat: number;
    lng: number;
    street: string;
    ward: string;
    district: string;
    city: string;
    locationDescription: string;

    title: string;
    content: string;
    bedRoom: number;
    status: string;
    price: number;
    propertyType: string;
    userId: number;
    guest: number;
    images: string[];
    amenities: string[];
}
