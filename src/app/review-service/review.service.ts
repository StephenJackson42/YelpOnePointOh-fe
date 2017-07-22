import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Review} from '../review-service/review';

@Injectable()
export class ReviewService{
	private http: Http;
    private url: string = 'http://localhost:8080/api/v1/review';

    constructor(http: Http) {
        this.http = http;
    }

    getAllReviews(): Promise<Review[]> {
        return this.http.get(this.url)
            .toPromise()
            .then(response => response.json() as Review[])
            .catch(this.handleError);
    }

    getReviewById(reviewId: number): Promise<Review> {
        return this.http.get(this.url + `/${reviewId}`)
            .toPromise()
            .then(response => response.json() as Review)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<string> {
        console.log(error);
        return Promise.reject("Unable to retrieve review data.");
    }

    updateReview(reviewId: number, review: Review): Promise<Review> {
        return this.http.put(this.url + `/${reviewId}`, review)
            .toPromise()
            .then(response => response.json() as Review)
            .catch(this.handlePutError);
    }

    createReview(review: Review): Promise<Review> {
        return this.http.post(this.url + "/", review)
            .toPromise()
            .then(response => response.json() as Review)
            .catch(this.handleReviewError);
    }

    private handleReviewError(error: any): Promise<string> {
        console.log(error);
        return Promise.reject("Unable to create review.");
    }

    private handlePutError(error: any): Promise<string> {
        console.log(error);
        return Promise.reject("Unable to update review.");
    }

    deleteReview(reviewId: number): Promise<Review> {
        return this.http.delete(this.url + `/${reviewId}`)
            .toPromise()
            .then(response => response.json() as Review)
            .catch(this.handleDeleteError);
    }

    private handleDeleteError(error: any): Promise<string> {
        console.log(error);
        return Promise.reject("Unable to delete review.");
    }
} 