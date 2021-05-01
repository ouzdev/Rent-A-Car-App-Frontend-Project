import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalResponseModel } from 'src/app/model/rental/rentalResponseModel';
import { RentalDetailResponseModel } from 'src/app/model/rentalDetail/rentalDetailResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
    apiUrl="https://localhost:44320/api/rentals"
  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<RentalResponseModel>{
      return this.httpClient.get<RentalResponseModel>(this.apiUrl+"/getall");
  }

  getRentalsDetail():Observable<RentalDetailResponseModel>{
    return this.httpClient.get<RentalDetailResponseModel>(this.apiUrl+"/getlistrentaldetails");
}
}
