import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  
     transform(value: any, filterString: string, propName: string): any {
    let resultArray = [];
    //console.log(value, 'before filter');
    if (filterString === '' ) {
      console.log(value, 'this is my value');
      return value;
    }
    for (const item of value) {
      let filterItem = item[propName].common.toLowerCase();
      let theString = filterString.toLowerCase();
      
      //console.log(filterItem);
      //console.log(theString);
      if (filterItem.includes(theString)) {
        resultArray.push(item);
      }
      
    }
    console.log(resultArray, "this my result array" );
      return resultArray;
    
  }
  }

