import { Component, OnInit } from '@angular/core';
import { Session } from 'src/app/models/Session';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-sessions-of-formation',
  templateUrl: './sessions-of-formation.component.html',
  styleUrls: ['./sessions-of-formation.component.css']
})
export class SessionsOfFormationComponent implements OnInit {

  session:Session

  constructor(private sessionService:SessionService) { }

  ngOnInit(): void {
    this.session = this.sessionService.findById(1);
    console.log(this.session);
  }

}
