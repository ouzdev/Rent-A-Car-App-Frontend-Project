import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddBrandDto } from 'src/app/model/brand/addBrandDto';
import { Brand } from 'src/app/model/brand/brand';
import { BrandResponseModel } from 'src/app/model/brand/brandResponseModel';
import { ResponseModel } from 'src/app/model/responseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl = 'https://localhost:44320/api/brands';

  constructor(private httpClient:HttpClient) { }

  getBrands(): Observable<BrandResponseModel> {
    return this.httpClient.get<BrandResponseModel>(this.apiUrl+"/getall");
  }

  addBrand(brand:any):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"/add",brand);
  }

}
