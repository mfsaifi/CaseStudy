import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { global } from 'src/app/global';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  


  constructor(private route: ActivatedRoute, private router: Router, private login_service:LoginService) { 

    global.farman(this.router, this.login_service);
  
  }

  ngOnInit(): void {
  }

}
