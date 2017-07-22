
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Review } from '../review-service/review';
import { Router } from '@angular/router';

@Component({
    selector: 'review-card',
    templateUrl: 'review-card.component.html',
    styleUrls: ['review-card.component.css']
})
export class ReviewCardComponent { 

	@Input() 
  private review: Review;
  @Output()
  private reviewDeleted = new EventEmitter();
  private router: Router;

  deleteReview() {
      this.reviewDeleted.emit(this.review);
  }
}