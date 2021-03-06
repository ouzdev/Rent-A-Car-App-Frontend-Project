import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/services/color/color.service';
import { Color } from 'src/app/model/color/color';


@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  colors: Color[] = [];
  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.colorService.getColors().subscribe(response=>{
      this.colors = response.data;
    })
  }

}
