import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'date'
})
export class LocalDateTimePipe implements PipeTransform {

  transform(date: string): string {
    let dateOut: moment.Moment = moment(date, "YYYY-MM-DDTHH:mm:ss"); 
   return dateOut.format("DD/MM/YYYY");
  
  }

}