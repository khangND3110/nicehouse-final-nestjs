import { BelongsTo, Column, CreatedAt, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import { Apartment } from "src/apartments/entities/apartment.entity";
import { ReviewField } from "src/review-fields/entities/review-field.entity";
import { ReviewImage } from "src/review-images/entities/review-image.entity";
import { User } from "src/users/entities/user.entity";

@Table({
    timestamps: true,
})
export class Review extends Model { 
    @ForeignKey(() => User)
    @PrimaryKey
    @Column
    userId: number;

    @ForeignKey(() => Apartment)
    @PrimaryKey
    @Column
    apartmentId: number;

    @Column
    title: string;

    @Column
    text: string;

    @CreatedAt
    createdAt: string;

    @UpdatedAt
    updatedAt: string;

    @BelongsTo(() => User)
    user: User;

    @BelongsTo(() => Apartment)
    apartment: Apartment;

    @Column({ type: DataType.ARRAY(DataType.JSON)})
    reviewFields: ReviewField[];

    @Column({ type: DataType.ARRAY(DataType.STRING)})
    reviewImages: string[];
}
