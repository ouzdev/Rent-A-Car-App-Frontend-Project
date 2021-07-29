import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CarComponent } from './components/car/car.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DxBoxModule, DxButtonModule, DxCheckBoxModule, DxDataGridModule, DxFileUploaderModule, DxFormModule, DxLoadIndicatorModule, DxNumberBoxModule, DxSelectBoxModule, DxTemplateModule } from 'devextreme-angular';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ColorComponent,
    CarComponent,
    CustomerComponent,
    RentalComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxFileUploaderModule,
    HttpClientModule,
    DxButtonModule,
    DxSelectBoxModule,
    DxLoadIndicatorModule,
    DxTemplateModule,
    DxFormModule,
    DxBoxModule,
    DxDataGridModule,
    DxNumberBoxModule,
    DxCheckBoxModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
