import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImageResponseModel } from 'src/app/model/carImage/carImageResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl='https://localhost:44320/api/carimages'

  constructor(private httpClient:HttpClient) {
    
   }
   getCarsById(carId:any):Observable<CarImageResponseModel>{
    let params = new HttpParams().set('id',carId);
    return this.httpClient.get<CarImageResponseModel>(this.apiUrl+"/getbyid",{params:params});
  }
  // addCarImage(carsImage:FileList):Observable<CarImageResponseModel>{
  //   const formData = new FormData()
  //   formData.append("image",carsImage.value);
  //   return this.httpClient.post<CarImageResponseModel>(this.apiUrl+"/getbyid");
  // }
}
