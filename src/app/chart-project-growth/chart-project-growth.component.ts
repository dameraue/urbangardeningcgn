import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-project-growth',
  templateUrl: './chart-project-growth.component.html',
  styleUrls: ['./chart-project-growth.component.css']
})
export class ChartProjectGrowthComponent {

/*  constructor() {

   }
  ngOnInit(): void {

  } 

public graph = {
  data: [
      { x: [1, 2, 3], y: [2, 6, 3], type: 'scatter', mode: 'lines+points', marker: {color: 'red'} },
      { x: [1, 2, 3], y: [2, 5, 3], type: 'bar' },
  ],
  layout: {width: 320, height: 240, title: 'A Fancy Plot'}
};
*/
public graph = {
  data: [
  {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    mode: 'markers',
    type: 'scatter'
  },
  
  {
    x: [2, 3, 4, 5],
    y: [16, 5, 11, 9],
    mode: 'lines',
    type: 'scatter'
  },
  
  {
    x: [1, 2, 3, 4],
    y: [12, 9, 15, 12],
    mode: 'lines+markers',
    type: 'scatter'
  }
],
  
layout: {width: 820, height: 640, title: 'A Fancy Plot'}
};}