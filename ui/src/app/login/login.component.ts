import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:String ;
  password:String;


  u_types = ["admin", "user"];
  u_type = this.u_types[0];



  constructor(private route: ActivatedRoute, private router: Router) {

    this.user = undefined;
    this.password = undefined;

   }

  ngOnInit(): void {
  }

  validate(){

     localStorage.setItem('user', this.user.toString() );
     localStorage.setItem('pass', this.password.toString() );
     localStorage.setItem('type', this.u_type.toString() );
     this.router.navigateByUrl('/'+this.u_type);

  }

}
