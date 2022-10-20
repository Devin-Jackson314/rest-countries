import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  data: any;
  countries: any;
  public searchFilter: any = '';
 region: any = '';
  population: any;
  
  toCommas: any;
  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    
    this.data = this.dataservice.getDataProp(['region', 'population', 'flags', 'capital', 'name']).subscribe(responseData => {
      this.countries = responseData;
      console.log(responseData);
    })
    
    this.data = this.dataservice.getDataProp(['population']).subscribe(responseData => {
      this.population = responseData;
      this.toCommas = responseData;
        this.toCommas.toLocaleString("en-US") 
      console.log(responseData);
      console.log(responseData.toLocaleString())
    })
  }
  
}
