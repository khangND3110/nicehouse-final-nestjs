import { AutoIncrement, BelongsTo, Column, CreatedAt, ForeignKey, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import { User } from "src/users/entities/user.entity";

@Table({
    timestamps: true,
})
export class AvatarImage extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;

    @Column
    avatarUrl: string;

    @Column
    backgroundUrl: string;

    @ForeignKey(() => User)
    @Column
    userId: number;

    @CreatedAt
    createdAt: string;

    @UpdatedAt
    updatedAt: string;

    @BelongsTo(() => User)
    user: User
}
