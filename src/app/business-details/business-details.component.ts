import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusinessService } from '../business-service/business.service';
import { Business } from '../business-service/business';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'business-details',
    templateUrl: './business-details.component.html',
    styleUrls: ['./business-details.component.css']
})

export class BusinessDetailsComponent {
    private businessId: number;
    private businesses: Business[];
    private business: Business;
    private error: string;
    private url: SafeResourceUrl;
    private sanitizer: DomSanitizer;

    constructor(route: ActivatedRoute, businessService: BusinessService, sanitizer: DomSanitizer) {
        this.sanitizer = sanitizer;
        route.params.subscribe(params => this.businessId = params['businessId']);
        businessService.getBusinessById(this.businessId).then((business) => {this.business = business

            this.mapUrl(this.business.address);
        });

        

    }

    mapUrl(address: string){
        var url;
        var key = "&key=AIzaSyDCM7nKNE7aCtAtjdIluoYZlaHKSZJvYG4"

        url =  "https://www.google.com/maps/embed/v1/place?q=";
        
        url=url.concat(address);
        url=url.concat(key);
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(url);
              
    }

    




}
