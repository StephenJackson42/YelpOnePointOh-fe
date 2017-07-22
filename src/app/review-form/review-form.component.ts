import { Component } from '@angular/core';
import { Review } from '../review-service/review';
import { ReviewService } from '../review-service/review.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
    selector: 'review-form',
    templateUrl: 'review-form.component.html',
    styleUrls: ['review-form.component.css']
})
export class ReviewFormComponent { 

	private review: Review;
	private reviewService: ReviewService;
	private router: Router;
	private error: string;
	private reviewId: number;

    constructor(reviewService: ReviewService, router: Router, route: ActivatedRoute) {
        this.review = new Review();
        this.reviewService = reviewService;
        this.router = router;
        route.params.subscribe(params => this.reviewId = params['reviewId']);
        if (this.reviewId) {
            reviewService.getReviewById(this.reviewId)
                .then((review) => this.review = review)
                .catch((error) => this.error = error);
        } else {
            this.review = new Review();
        }
    }

  

     submitReview() {
        if (this.reviewId) {
            this.reviewService.updateReview(this.reviewId, this.review)
                .then((review) => {
                    this.review = review;
                    this.router.navigateByUrl('/reviews/' + this.reviewId);
                })
                .catch((error) => this.error = error);
        } else {
            this.reviewService.createReview(this.review)
                .then((review) => {
                    this.review = review;
                    this.router.navigateByUrl('/');
                })
                .catch((error) => this.error = error);
        }

    }

    deleteReview() {
        this.reviewService.deleteReview(this.review.reviewId)
            .then((review) => {
                this.review = review;
                this.router.navigateByUrl('/')
            });
    }



}

