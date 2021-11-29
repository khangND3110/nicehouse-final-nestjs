import { BelongsTo, Column, CreatedAt, ForeignKey, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import { Apartment } from "src/apartments/entities/apartment.entity";
import { User } from "src/users/entities/user.entity";

@Table({
    timestamps: true,
})
export class ApartmentFavorite extends Model {
    @ForeignKey(() => User)
    @PrimaryKey
    @Column
    userId: number;

    @ForeignKey(() => Apartment)
    @PrimaryKey
    @Column
    apartmentId: number;

    @CreatedAt
    createdAt: string;

    @UpdatedAt
    updatedAt: string;

    @BelongsTo(() => User)
    user: User;

    @BelongsTo(() => Apartment)
    apartment: Apartment;
}
