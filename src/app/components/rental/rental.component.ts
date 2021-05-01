import { Component, OnInit } from '@angular/core';
import { RentalDetailDto } from 'src/app/model/rentalDetail/rentalDetailDto';
import { RentalService } from 'src/app/services/rental/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  rentals: RentalDetailDto[]=[];
  constructor(private rentalService:RentalService) { }

  ngOnInit(): void {
  this.rentalService.getRentalsDetail().subscribe(response=>{
      this.rentals = response.data;
  })

  }

}
