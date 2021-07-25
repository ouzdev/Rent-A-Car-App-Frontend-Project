import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand/brand.service';
import { Brand } from 'src/app/model/brand/brand';
import { AddBrandDto } from 'src/app/model/brand/addBrandDto';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brandDataSource: Brand[] = [];
  dtos:AddBrandDto;
  popupTitle: string = "";
  constructor(private brandService: BrandService) { }
  updateBrand(data: any) {
    this.popupTitle = "Araba Düzenle";
  }
  initNewBrand(data: any) {
    this.popupTitle = "Araba Ekle";
  }

  addBrandEvent(data:AddBrandDto) {
    let form = JSON.stringify(data);
    console.log(form);
    this.brandService.addBrand(form).subscribe(response => {console.log(response.message);});
  }

  ngOnInit(): void {
    this.brandService.getBrands().subscribe(response => {
      this.brandDataSource = response.data;
    })
  }

}
