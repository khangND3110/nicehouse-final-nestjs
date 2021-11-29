import { AutoIncrement, Column, CreatedAt, HasOne, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import { Apartment } from "src/apartments/entities/apartment.entity";
import { User } from "src/users/entities/user.entity";

@Table({ timestamps: true })
export class Location extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;

    @Column
    lat: number;

    @Column
    lng: number;

    @Column
    street: string;

    @Column
    ward: string;

    @Column
    district: string;

    @Column
    city: string;

    @HasOne(() => User)
    user: User;

    @HasOne(() => Apartment)
    apartment: Apartment;
}
