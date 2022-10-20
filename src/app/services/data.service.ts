import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  allData = "https://restcountries.com/v3.1/all?fields={name},{region},{capital}";
  filterUrl = 'https://restcountries.com/v3.1/all?fields='
  countryNameUrl: any;
  bordersUrl: any;
  
  constructor(private http: HttpClient) { }

  getDataProp(args: any) {
    args.forEach((element: any) => {
      this.filterUrl += element + ','
    });
    console.log(this.filterUrl, "all data properties")
    return this.http.get(this.filterUrl);
 
  }

  getCountryName(name: string) {
    this.countryNameUrl = 'https://restcountries.com/v3.1/name/' + name + '?fullText=true';
    return this.http.get(this.countryNameUrl);
  }

  getBordersCountries(borders: any) {
    this.bordersUrl = 'https://restcountries.com/v3.1/alpha?codes=' + borders;
    return this.http.get(this.bordersUrl);
  }


 

}