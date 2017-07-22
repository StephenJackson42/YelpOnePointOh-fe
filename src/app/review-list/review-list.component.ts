import { Component } from '@angular/core';
import { ReviewService } from '../review-service/review.service';
import { Review } from '../review-service/review';

@Component({
    selector: 'review-list',
    templateUrl: 'review-list.component.html',
    styleUrls: ['review-list.component.css']
})
export class ReviewListComponent {
    private reviews: Review[];
    private error: string;
    private reviewService: ReviewService;


    constructor(reviewService: ReviewService) {
       this.reviewService = reviewService;
       reviewService.getAllReviews()
            .then((reviews) => this.reviews = reviews).catch((error) => this.error = error);
    }

   
    handleReviewDeleted(review) {
        this.reviewService.deleteReview(review.reviewId)
            .then((review) => this.deleteReviewsFromList(review.reviewId))
            .catch((error) => this.error = error);
    }
    
    deleteReviewsFromList(reviewId: number) {
        const index: number = this.reviews
            .findIndex((review) => review.reviewId === reviewId);
        this.reviews.splice(index, 1);
    }
}

