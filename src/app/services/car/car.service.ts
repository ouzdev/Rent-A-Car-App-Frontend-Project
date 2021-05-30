import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarResponseModel } from 'src/app/model/car/carResponseModel';
import { Observable } from 'rxjs';
import { ResponseModel } from 'src/app/model/responseModel';
import { Car } from 'src/app/model/car/car';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44320/api/cars';

  constructor(private httpClient: HttpClient) {}

  getCarDetails(): Observable<CarResponseModel> {
    return this.httpClient.get<CarResponseModel>(this.apiUrl+"/getcardetails");
  }
  
  addCar(car:Car):Observable<ResponseModel>{
    return  this.httpClient.post<ResponseModel>(this.apiUrl+"/add",car)
  }
}
