import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-countriesfull',
  templateUrl: './countriesfull.component.html',
  styleUrls: ['./countriesfull.component.css']
})
export class CountriesfullComponent implements OnInit {
  data: any;
  countries: any;
  language: any;
  stringObject: any;
  languages: any;

  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
     this.data = this.dataservice.getDataProp(['region', 'subregion', 'population', 'flags', 'capital', 'name', 'nativename', 'tld', 'currencies', 'languages', 'borders']).subscribe(responseData => {
       this.countries = responseData;
       console.log(this.countries)
      //  this.language = this.dataservice.getDataProp(['languages']).subscribe(responseData => {
      //    this.languages = responseData
        
      //    console.log(this.languages);
      //  })
    
    })
  }

}
