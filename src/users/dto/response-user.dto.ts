import { Location } from "src/locations/entities/location.entity";
import { User } from "../entities/user.entity";

export class ResponseUserDto {
    email: string;
    fullName: string;
    phoneNumber: string;
    content: string;
    location?: Location;
    accessToken: string;
}
