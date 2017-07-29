import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from '../review-service/review.service';
import { Review } from '../review-service/review';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


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
    private url: SafeResourceUrl;
    private sanitizer: DomSanitizer;


    constructor(route: ActivatedRoute, reviewService: ReviewService, sanitizer: DomSanitizer) {
        this.sanitizer = sanitizer;

        route.params.subscribe(params => this.reviewId = params['reviewId']);
        reviewService.getReviewById(this.reviewId).then((review) => {this.review = review

        console.log(this.review.link);

        this.mapUrl(this.review.link);
        console.log(this.url);
        });

    }

    mapUrl(link: string){
        var url;
        url =  "https://www.youtube.com/embed/";
        url = url.concat(link)

        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(url);
              
    }
}