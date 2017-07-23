import { Component } from '@angular/core';
import { BusinessService } from '../business-service/business.service';
import { Business } from '../business-service/business';

@Component({
    selector: 'business-list',
    templateUrl: 'business-list.component.html',
    styleUrls: ['business-list.component.css']
})
export class BusinessListComponent {
    private businesses: Business[];
    private error: string;
    private businessService: BusinessService;


    constructor(businessService: BusinessService) {
       this.businessService = businessService;
       businessService.getAllBusinesses()
            .then((businesses) => this.businesses = businesses).catch((error) => this.error = error);
    }

   
    handleBusinessDeleted(business) {
        this.businessService.deleteBusiness(business.businessId)
            .then((business) => this.deleteBusinesssFromList(business.businessId))
            .catch((error) => this.error = error);
    }
    
    deleteBusinesssFromList(businessId: number) {
        const index: number = this.businesses
            .findIndex((business) => business.businessId === businessId);
        this.businesses.splice(index, 1);
    }
}