import { Review } from "./entities/review.entity";

export const reviewsProviders = [
    {
        provide: 'REVIEWS_REPOSITORY',
        useValue: Review,
    }
]