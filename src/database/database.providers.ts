import { Sequelize } from "sequelize-typescript";
import { ApartmentFavorite } from "src/apartment-favorites/entities/apartment-favorite.entity";
import { Apartment } from "src/apartments/entities/apartment.entity";
import { AvatarImage } from "src/avatar-images/entities/avatar-image.entity";
import { Location } from "src/locations/entities/location.entity";
import { Review } from "src/reviews/entities/review.entity";
import { User } from "src/users/entities/user.entity";

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'ndkhang3110',
                database: 'nicehouse',
            });
            sequelize.addModels([
                User,
                Review,
                Location,
                AvatarImage,
                Apartment,
                ApartmentFavorite,
            ]);
            await sequelize.sync();
            return sequelize;
        },
    },
];