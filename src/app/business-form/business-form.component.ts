import { Component } from '@angular/core';
import { Business } from '../business-service/business';
import { BusinessService } from '../business-service/business.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
    selector: 'business-form',
    templateUrl: 'business-form.component.html',
    styleUrls: ['business-form.component.css']
})
export class BusinessFormComponent { 

	private business: Business;
	private businessService: BusinessService;
	private router: Router;
	private error: string;
	private businessId: number;

    constructor(businessService: BusinessService, router: Router, route: ActivatedRoute) {
        this.business = new Business();
        this.businessService = businessService;
        this.router = router;
        route.params.subscribe(params => this.businessId = params['businessId']);
        if (this.businessId) {
            businessService.getBusinessById(this.businessId)
                .then((business) => this.business = business)
                .catch((error) => this.error = error);
        } else {
            this.business = new Business();
        }
    }

  

     submitBusiness() {
        if (this.businessId) {
            this.businessService.updateBusiness(this.businessId, this.business)
                .then((business) => {
                    this.business = business;
                    this.router.navigateByUrl('/businesses/' + this.businessId);
                })
                .catch((error) => this.error = error);
        } else {
            this.businessService.createBusiness(this.business)
                .then((business) => {
                    this.business = business;
                    this.router.navigateByUrl('/businesses');
                })
                .catch((error) => this.error = error);
        }

    }

    deleteBusiness() {
        this.businessService.deleteBusiness(this.business.businessId)
            .then((business) => {
                this.business = business;
                this.router.navigateByUrl('/')
            });
    }



}


