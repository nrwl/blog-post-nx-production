import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface ApiResponse {
  cars: string[];
  id: string;
}

@Component({
  selector: 'cars',
  templateUrl: './car.component.html'
})
export class CarComponent implements OnInit {
  cars: string[] = [];
  apiInstance: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('/api/cars').subscribe((res: ApiResponse) => {
      this.cars = res.cars;
      this.apiInstance = res.id;
    });
  }
}
