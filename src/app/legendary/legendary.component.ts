import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-legendary',
  templateUrl: './legendary.component.html',
  styleUrls: ['./legendary.component.css']
})
export class LegendaryComponent implements OnInit {
  
  @ViewChild('areaChart') areaChart;

  constructor() { }

  ngOnInit(): void {
    this.areaChartMake()
  }

  areaChartMake(){
    console.log(this.areaChart)
  }

}
