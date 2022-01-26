import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'urban-gardening-cgn';

  public screenWidth: any;
  public screenHeight: any;

  
  ngOnInit() {
      this.screenWidth = window.innerWidth;
      this.screenHeight = window.innerHeight;


    }
  
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  
  }
}
