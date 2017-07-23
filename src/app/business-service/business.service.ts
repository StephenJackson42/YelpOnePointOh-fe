import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Business} from '../business-service/business';

@Injectable()
export class BusinessService{
    private http: Http;
    private url: string = 'http://localhost:8080/api/v1/business';

    constructor(http: Http) {
        this.http = http;
    }


    getAllBusinesses(): Promise<Business[]> {
        return this.http.get(this.url)
            .toPromise()
            .then(response => response.json() as Business[])
            .catch(this.handleError);
    }

    getBusinessById(businessId: number): Promise<Business> {
        return this.http.get(this.url + `/${businessId}`)
            .toPromise()
            .then(response => response.json() as Business)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<string> {
        console.log(error);
        return Promise.reject("Unable to retrieve business data.");
    }

    updateBusiness(businessId: number, business: Business): Promise<Business> {
        return this.http.put(this.url + `/${businessId}`, business)
            .toPromise()
            .then(response => response.json() as Business)
            .catch(this.handlePutError);
        
    }

    createBusiness(business: Business): Promise<Business> {
        return this.http.post(this.url + "/", business)
            .toPromise()
            .then(response => response.json() as Business)
            .catch(this.handleBusinessError);
    }

    private handleBusinessError(error: any): Promise<string> {
        console.log(error);
        return Promise.reject("Unable to create business.");
    }

    private handlePutError(error: any): Promise<string> {
        console.log(error);
        return Promise.reject("Unable to update business.");
    }

    deleteBusiness(businessId: number): Promise<Business> {
        return this.http.delete(this.url + `/${businessId}`)
            .toPromise()
            .then(response => response.json() as Business)
            .catch(this.handleDeleteError);
    }

    private handleDeleteError(error: any): Promise<string> {
        console.log(error);
        return Promise.reject("Unable to delete business.");
    }
} 