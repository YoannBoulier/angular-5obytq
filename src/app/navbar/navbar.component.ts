import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-menu',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavBarComponent implements OnInit {
    
  constructor(private session : SessionService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.session.isConnected = false;
    this.router.navigateByUrl('/login');
  }

  isConnected() {
    return this.session.isConnected;
  }
}