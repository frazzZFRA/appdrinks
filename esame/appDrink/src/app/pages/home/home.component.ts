import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/_service/api.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  isChecked: boolean = false;
  typeOfSearch: string = '';
  searchNameIng: string = '';
  cities: any[] = ['Turin', 'New York'];
  profileForm = new FormGroup({
    LATITUDE: new FormControl(''),
    LONGITUDE: new FormControl(''),
  });
  constructor(private api: ApiService) {}
  
  
  
onSubmit() {
  this.api.apiCallSunrise().subscribe((result)=>{
    console.warn("get api data", result);

  })
}
}
  
