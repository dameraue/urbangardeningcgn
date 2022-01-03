import { Component, AfterViewInit } from '@angular/core';
import * as Leaf from 'leaflet';

@Component({
  selector: 'app-overview-map',
  templateUrl: './overview-map.component.html',
  styleUrls: ['./overview-map.component.css']
})
export class OverviewMapComponent implements AfterViewInit {
  private map:any;

  private initMap(): void {
    this.map = Leaf.map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 3
    });

    const tiles = Leaf.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }
}