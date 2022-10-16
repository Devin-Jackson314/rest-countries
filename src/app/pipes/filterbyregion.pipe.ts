import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterbyregion'
})
export class FilterbyregionPipe implements PipeTransform {

  transform(value: any) {
      let regionArray: { region: string; }[] = [];
    value.array.forEach((element: { region: string }) => {
      if (element.region == 'America') {
        regionArray.push(element);  
      }
    });
    console.log(regionArray);
    return regionArray;
  }

}
