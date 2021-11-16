'use strict';

import { Router } from "@angular/router";
import { Login } from "./Models/login";
import { LoginService } from "./Services/login.service";

export class global{
    
    static login: Login;
    static type: string;
    




    public static farman(router: Router, login_service:LoginService) {

        this.login = new Login();
    

        this.login.userId =  localStorage.getItem('user');
        this.login.pass =  localStorage.getItem('pass');
   

        console.log(this.login);
        
        console.log(this.login);
  
        login_service.validate(this.login).subscribe(response=>{
            console.log(response)
        },error=>{
          console.log(error)
        });


        if(this.type != undefined && this.login.userId != undefined && this.login.pass != undefined)
        {
            router.navigateByUrl('/'+this.type);

        }

        else{
            router.navigateByUrl('/login');
        }

    

    }





}
