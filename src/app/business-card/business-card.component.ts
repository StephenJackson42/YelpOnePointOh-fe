import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Business } from '../business-service/business';
import { Router } from '@angular/router';

@Component({
    selector: 'business-card',
    templateUrl: 'business-card.component.html',
    styleUrls: ['business-card.component.css']
})
export class BusinessCardComponent { 

	@Input() 
  private business: Business;
  @Output()
  private businessDeleted = new EventEmitter();
  private router: Router;

  deleteBusiness() {
      this.businessDeleted.emit(this.business);
  }
}