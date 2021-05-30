import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/model/brand/brand';

import { CarDetails } from 'src/app/model/car/cardetails';
import { Color } from 'src/app/model/color/color';
import { BrandService } from 'src/app/services/brand/brand.service';
import { CarService } from 'src/app/services/car/car.service';
import { ColorService } from 'src/app/services/color/color.service';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  carGridDataSource: CarDetails[] = [];
  colors: Color[] = [];
  brands:Brand[]=[];
  value: any[] = [];

  popupTitle:string="";

  constructor(
    private carService: CarService,
    private colorService:ColorService,
    private brandsService:BrandService
  ) {}

  addCarEvent(data:any) {
    console.log(data.data);
    console.log(this.value)
  }
  updateCar(data:any){
    this.popupTitle = "Araba Düzenle";
  }
  initNewCar(data:any){
    this.popupTitle = "Araba Ekle";
  }

  ngOnInit(): void {
    this.carService.getCarDetails().subscribe((respose) => {
      this.carGridDataSource = respose.data;
    });
    this.colorService.getColors().subscribe((response) =>{
      this.colors = response.data;
    })
    this.brandsService.getBrands().subscribe((response)  => {
      this.brands = response.data;
    })
  }
}
