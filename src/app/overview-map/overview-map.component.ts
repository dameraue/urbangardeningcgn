import { Component, AfterViewInit, HostListener } from '@angular/core';
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
      center: [ 50.935173, 6.953101 ],
      zoom: 12
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

  public screenWidth: any;
  public screenHeight: any;
  public relMapWidth: any;
  public relMapHeight: any;
  
  ngOnInit() {
      this.screenWidth = window.innerWidth;
      this.screenHeight = window.innerHeight;

      this.relMapWidth = this.screenWidth-100; 
      this.relMapHeight = this.screenHeight-100; 
    }
  
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this.relMapWidth = this.screenWidth-100; 
    this.relMapHeight = this.screenHeight-100; 
  }
}