import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavBarComponent implements OnInit {
  public isCollapsed = true;
  
  constructor() { }

  ngOnInit() {
  }

  inverse() {
    this.isCollapsed = !this.isCollapsed;
  }
}