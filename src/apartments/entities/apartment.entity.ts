import { AutoIncrement, BelongsTo, BelongsToMany, Column, CreatedAt, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import { ApartmentFavorite } from "src/apartment-favorites/entities/apartment-favorite.entity";
import { Location } from "src/locations/entities/location.entity";
import { Review } from "src/reviews/entities/review.entity";
import { User } from "src/users/entities/user.entity";

@Table({
    timestamps: true,
})
export class Apartment extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;

    @Column
    title: string;

    @Column
    content: string;

    @Column
    bedRoom: number;

    @Column
    guests: number;

    @Column
    status: string;

    @Column
    price: number;

    @Column
    propertyType: string;

    @Column({ type: DataType.ARRAY(DataType.STRING) })
    images: string[];

    @Column({ type: DataType.ARRAY(DataType.STRING) })
    amenities: string[];

    @CreatedAt
    createdAt: string;
    
    @UpdatedAt
    updatedAt: string;

    @ForeignKey(() => User)
    @Column
    authorId: number;

    @BelongsTo(() => User)
    author: User;

    @ForeignKey(() => Location)
    @Column
    locationId: number;

    @BelongsTo(() => Location)
    location: Location;

    @HasMany(() => ApartmentFavorite)
    apartmentFavorites: ApartmentFavorite[];

    @BelongsToMany(() => User, () => ApartmentFavorite)
    userFavorites: User[];

    @HasMany(() => Review)
    reviews: Review[];
}
