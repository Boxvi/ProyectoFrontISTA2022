import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localdatetime'
})
export class LocaldatetimePipe implements PipeTransform {

  transform(value: any[], query: string): unknown {
    if(query === '' || query === undefined) {
      return value;
    }
    return value.filter(user => user.name.toLowerCase().indexOf(query) != -1)
  }

}
