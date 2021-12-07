import { ReviewField } from "src/review-fields/entities/review-field.entity";
import { ReviewImage } from "src/review-images/entities/review-image.entity";

export class CreateReviewDto {
    userId: number;
    apartmentId: number;
    title: string;
    text: string;
    ratings: number;
    // reviewFields: ReviewField;
    reviewImages: string[];
    serviceRatings: string;
    roomsRatings: string;
    cleanlinessRatings: string;
    foodRatings: string;
}
