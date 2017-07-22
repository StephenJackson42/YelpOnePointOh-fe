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
        }]),
    	HttpModule,
    	FormsModule
    	

    ],
    providers: [ReviewService],
    bootstrap: [AppComponent]
    
})


export class AppModule { }