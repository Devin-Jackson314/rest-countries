import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { DataService,  } from 'src/app/services/data.service';

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
  name: any;
  countryname: any;

  constructor(private dataservice: DataService,
  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.name = { 
      name: this.route.snapshot.params['name']
    }

    this.route.params.subscribe((params: Params) => {
      this.name.name = params['name']
      this.getCountry()
    })
    //  this.data = this.dataservice.getDataProp(['region', 'subregion', 'population', 'flags', 'capital', 'name', 'nativename', 'tld', 'currencies', 'languages', 'borders']).subscribe(responseData => {
    //    this.countries = responseData;
    //    console.log(this.countries)
      
    
    // })
  }

  getCountry() {
    return this.dataservice.getCountryName(this.name.name).subscribe((data: any) => {
      this.countryname = data[0];
    })
  }

}
