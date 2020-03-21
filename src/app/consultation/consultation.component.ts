import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit {
  associations:any[] = [];

  constructor(private rest : RestApiService, private session : SessionService) { }

  ngOnInit() {
    this.rest.getUserAssociations(this.session.getConnectedUserId()).subscribe((data: {}) => {
      this.associations = JSON.parse(JSON.stringify(data));
    });
  }

}