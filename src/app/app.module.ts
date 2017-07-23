import { NgModule } from '@angular/core' ;
import { BrowserModule } from '@angular/platform-browser' ;
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ReviewListComponent } from './review-list/review-list.component';
import { ReviewDetailsComponent } from './review-details/review-details.component';
import { ReviewService } from './review-service/review.service';
import { HttpModule } from '@angular/http';
import { ReviewCardComponent } from './review-card/review-card.component';
import { FormsModule } from '@angular/forms';
import { ReviewFormComponent } from './review-form/review-form.component';

import { BusinessFormComponent } from './business-form/business-form.component';
import { BusinessListComponent } from './business-list/business-list.component';
import { BusinessDetailsComponent } from './business-details/business-details.component';
import { BusinessService } from './business-service/business.service';
import { BusinessCardComponent } from './business-card/business-card.component';






/*import { ReviewSortPipe } from './review-service/review-sort.pipe';
*/
@NgModule({
    declarations: [
    	AppComponent,
    	HeaderComponent,
    	ReviewListComponent,
    	ReviewDetailsComponent,
    	ReviewCardComponent,
    	ReviewFormComponent,
        BusinessListComponent,
        BusinessDetailsComponent,
        BusinessCardComponent,
        BusinessFormComponent,
    	/*ReviewSortPipe*/
    ],
    imports: [
    	BrowserModule, 
    	RouterModule.forRoot([{
             path: '',
             redirectTo: 'reviews',
             pathMatch: 'full'
        },
    	{
    		path: 'reviews',
    		component: ReviewListComponent,
    		
    	},
    	{
                path:'reviews/create',
                component: ReviewFormComponent
        },

    	{
    		path: 'reviews/:reviewId',
            component: ReviewDetailsComponent,

    	},
    	{
                path:'reviews/:reviewId/update',
                component: ReviewFormComponent
        },

        {
            path: 'businesses',
            component: BusinessListComponent,
            
        },
        {
                path:'businesses/create',
                component: BusinessFormComponent
        },

        {
            path: 'businesses/:businessId',
            component: BusinessDetailsComponent,

        },
        {
                path:'businesses/:businessId/update',
                component: BusinessFormComponent
        }]),
    	HttpModule,
    	FormsModule
    	

    ],
    providers: [ReviewService,BusinessService],
    bootstrap: [AppComponent]
    
})


export class AppModule { }