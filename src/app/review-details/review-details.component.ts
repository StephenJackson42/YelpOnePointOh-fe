import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from '../review-service/review.service';
import { Review } from '../review-service/review';

@Component({
    selector: 'review-details',
    templateUrl: './review-details.component.html',
    styleUrls: ['./review-details.component.css']
})

export class ReviewDetailsComponent {
    private reviewId: number;
    private reviews: Review[];
    private review: Review;
    private error: string;


    constructor(route: ActivatedRoute, reviewService: ReviewService) {
        route.params.subscribe(params => this.reviewId = params['reviewId']);
        reviewService.getReviewById(this.reviewId).then((review) => this.review = review);

    }
}