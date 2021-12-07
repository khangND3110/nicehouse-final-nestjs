import { AutoIncrement, BelongsTo, BelongsToMany, Column, CreatedAt, ForeignKey, HasMany, HasOne, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import { ApartmentFavorite } from "src/apartment-favorites/entities/apartment-favorite.entity";
import { Apartment } from "src/apartments/entities/apartment.entity";
import { AvatarImage } from "src/avatar-images/entities/avatar-image.entity";
import { Location } from "src/locations/entities/location.entity";
import { Review } from "src/reviews/entities/review.entity";

@Table({
    timestamps: true,
})
export class User extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;

    @Column
    email: string;

    @Column
    password: string;

    @Column
    fullName: string;

    @Column
    phoneNumber: string;

    @Column
    content: string;

    @CreatedAt
    createdAt: string;

    @UpdatedAt
    updatedAt: string;

    @ForeignKey(() => Location)
    @Column
    locationId: number;

    @BelongsTo(() => Location)
    location: Location

    @HasOne(() => AvatarImage)
    avatarImage: AvatarImage;

    @HasMany(() => ApartmentFavorite)
    apartmentFavorites: ApartmentFavorite[];

    @BelongsToMany(() => Apartment, () => ApartmentFavorite)
    apartments: Apartment[];

    @HasMany(() => Review)
    reviews: Review[];

    @HasMany(() => Apartment)
    apartmentOwners: Apartment[];
}
