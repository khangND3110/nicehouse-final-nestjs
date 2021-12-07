import { AutoIncrement, BelongsTo, Column, CreatedAt, DataType, ForeignKey, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import { Apartment } from "src/apartments/entities/apartment.entity";
import { ReviewField } from "src/review-fields/entities/review-field.entity";
import { User } from "src/users/entities/user.entity";

@Table({
    timestamps: true,
})
export class Review extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;

    @ForeignKey(() => User)
    @Column
    userId: number;

    @ForeignKey(() => Apartment)
    @Column
    apartmentId: number;

    @Column
    title: string;

    @Column
    text: string;

    @Column
    ratings: number;

    @CreatedAt
    createdAt: string;

    @UpdatedAt
    updatedAt: string;

    @BelongsTo(() => User)
    user: User;

    @BelongsTo(() => Apartment)
    apartment: Apartment;

    @Column({ type: DataType.JSON})
    reviewFields: ReviewField;

    @Column({ type: DataType.ARRAY(DataType.STRING)})
    reviewImages: string[];
}
