import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/model/car/car';
import { CarService } from 'src/app/services/car/car.service';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  carGridDataSource: Car[] = [];

  dropDownOptions: any;

  constructor(
    private carService: CarService,
  ) {}

  onValueChanged(e: any) {
      if (e.element.id==="colorSelectbox") {
      }
      else if(e.element.id==="brandSelectbox")
      {
        alert("Marka Seçildi")
      }
  }

  ngOnInit(): void {
    this.carService.getCars().subscribe((respose) => {
      this.carGridDataSource = respose.data;
    });
  }
}
