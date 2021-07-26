# Angular + DevExpress Rent a Car App

[<img src="https://github.com/ouzdev/Recap_AngularUI/blob/master/readme-image.png?raw=true">](http://google.com.au/)


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Project Tree Structure 
```
📦 Recap_AngularUI

├─ src
│  ├─ app
│  │  ├─ app-routing.module.ts
app.component.css
app.component.html
app.component.spec.ts
│  │  ├─ app.component.ts
│  │  ├─ app.module.ts
│  │  ├─ components
│  │  │  ├─ brand
│  │  │  │  ├─ brand.component.css
brand.component.html
│  │  │  │  └─ brand.component.ts
│  │  │  ├─ car
│  │  │  │  ├─ car.component.css
car.component.html
│  │  │  │  └─ car.component.ts
│  │  │  ├─ color
│  │  │  │  ├─ color.component.css
color.component.html
│  │  │  │  └─ color.component.ts
│  │  │  ├─ customer
│  │  │  │  ├─ customer.component.css
customer.component.html
│  │  │  │  └─ customer.component.ts
│  │  │  ├─ navbar
│  │  │  │  ├─ navbar.component.css
│  │  │  │  ├─ navbar.component.html
│  │  │  │  └─ navbar.component.ts
│  │  │  └─ rental
│  │  │     ├─ rental.component.css
│  │  │     ├─ rental.component.html
│  │  │     └─ rental.component.ts
│  │  ├─ model
│  │  │  ├─ brand
│  │  │  │  ├─ addBrandDto.ts
brand.ts
│  │  │  │  └─ brandResponseModel.ts
│  │  │  ├─ car
│  │  │  │  ├─ car.ts
carResponseModel.ts
│  │  │  │  └─ cardetails.ts
│  │  │  ├─ carImage
│  │  │  │  ├─ carImage.ts
│  │  │  │  └─ carImageResponseModel.ts
│  │  │  ├─ color
│  │  │  │  ├─ color.ts
│  │  │  │  └─ colorResponseModel.ts
│  │  │  ├─ customer
│  │  │  │  ├─ customer.ts
│  │  │  │  └─ customerResponseModel.ts
│  │  │  ├─ rental
│  │  │  │  ├─ rental.ts
│  │  │  │  └─ rentalResponseModel.ts
│  │  │  ├─ rentalDetail
│  │  │  │  ├─ rentalDetailDto.ts
│  │  │  │  └─ rentalDetailResponseModel.ts
│  │  │  └─ responseModel.ts
│  │  └─ services
│  │     ├─ brand
│  │     │  └─ brand.service.ts
│  │     ├─ car
│  │     │  └─ car.service.ts
│  │     ├─ carImage
│  │     │  └─ car-image.service.ts
│  │     ├─ color
│  │     │  └─ color.service.ts
│  │     ├─ customer
│  │     │  └─ customer.service.ts
│  │     └─ rental
│  │        └─ rental.service.ts
│  ├─ assets
│  │  ├─ .gitkeep
│  │  └─ bootstrap-solid.svg
│  ├─ environments
│  │  ├─ environment.prod.ts
│  │  └─ environment.ts
│  ├─ favicon.ico
index.html
│  ├─ main.ts
│  ├─ polyfills.ts
│  ├─ styles.css
│  └─ test.ts
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.spec.json
└─ tslint.json
```
