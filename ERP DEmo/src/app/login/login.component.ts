import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private router : Router) { }
  username : String;
  password : string;
  ngOnInit() {
  }
  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate(["transaction"]);
    }else {
      alert("Invalid credentials");
    }
  }
}
