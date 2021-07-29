import { Component, OnInit, ViewChild } from '@angular/core';
import { BrandService } from 'src/app/services/brand/brand.service';
import { Brand } from 'src/app/model/brand/brand';
import { AddBrandDto } from 'src/app/model/brand/addBrandDto';
import { DxDataGridComponent } from 'devextreme-angular';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
  refreshDataGrid() {
    this.dataGrid.instance.refresh()
        .then(function() {
            // ...
        })
        .catch(function(error) {
            // ...
        });
}
  brandDataSource: Brand[] = [];
  datas:Brand;
  dtos:AddBrandDto;
  popupTitle: string = "";
  constructor(private brandService: BrandService,private toastr:ToastrService) { }
  editingBrand(data: any) {
    this.popupTitle = "Marka Düzenle";
  }
  updateRow(e:any){
console.log(e);
    this.brandService.updateBrand({id:e.oldData.id,name:e.newData.name}).subscribe(response => {
      this.toastr.success(response.message,"",{
        positionClass:'toast-bottom-right'
      });
      this.refreshDataGrid();
  },
    error=>{
      console.log(error);
      this.toastr.error(error.message,"",{
        positionClass:'toast-bottom-right'
      });
    });
  }
  initNewBrand(data: any) {
    this.popupTitle = "Marka Ekle";
  }
  removeRow(e:any){
    this.brandService.deleteBrand(e.data).subscribe(response => {
      this.toastr.success(response.message,"",{
        positionClass:'toast-bottom-right'
      });
      this.refreshDataGrid();
  },
    error=>{
      console.log(error);
      this.toastr.error(error.message,"",{
        positionClass:'toast-bottom-right'
      });
    });
  }
  insertRow(e:any) {
    this.brandService.addBrand(e.data).subscribe(response => {
        this.toastr.success(response.message,"",{
          positionClass:'toast-bottom-right'
        });
        this.refreshDataGrid();
      },
    error=>{
      this.toastr.error(error.message,"",{
        positionClass:'toast-bottom-right'
      });
    });

  }

  ngOnInit(): void {
    this.brandService.getBrands().subscribe(response => {
      this.brandDataSource = response.data;
    })
  }

}
