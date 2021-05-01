import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand/brand.service';
import { Brand } from 'src/app/model/brand/brand';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data;
    })
  }

}
