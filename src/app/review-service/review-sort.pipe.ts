// import {Review} from '../review-service/review';
// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({name: 'reviewSort'})
// export class ReviewSortPipe implements PipeTransform{
// 	transform(values: Review[], order?: string) {
//         if (values) {
//             values.sort((first: Review, second: Review) => {
//                 if (first.lastUpdated < second.lastUpdated) {
//                     return order === 'asc' ? 1 : -1;
//                 } else if (first.lastUpdated > second.lastUpdated) {
//                     return order === 'asc' ? -1 : 1;
//                 } else {
//                     return 0;
//                 }
//             });
//         }
//         return values;
//     }
// }