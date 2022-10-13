import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  allData = "https://restcountries.com/v3.1/all?fields={name},{region},{capital}";
  filterUrl = 'https://restcountries.com/v3.1/all?fields='
  
  constructor(private http: HttpClient) { }

  getDataProp(args: any) {
    args.forEach((element: any) => {
      this.filterUrl += element + ','
    });
    console.log(this.filterUrl, "all data properties")
    return this.http.get(this.filterUrl);
 
  }


}