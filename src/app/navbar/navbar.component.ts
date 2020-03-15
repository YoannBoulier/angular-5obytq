import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-menu',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavBarComponent implements OnInit {
    
  constructor(private session : SessionService, private http: HttpClient, private router: Router) { }

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