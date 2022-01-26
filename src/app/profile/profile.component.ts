import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 projectControl = new FormControl('');
  constructor() { }

  ngOnInit(): void {

  }
  projectName = 'new Project';
}
