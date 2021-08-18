import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstname:string='';
  lastname:string='';
  username:string='';
  password:string='';
  users:User[]=[];
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    console.log(this.firstname);
    let user:User={
      

      
      firstname:this.firstname,
      lastname:this.lastname,
      username:this.username,
      password:this.password

    }
    this.users.push(user);

    sessionStorage.setItem("users", JSON.stringify(this.users));

    this.router.navigate(["login"]);
  }


}

interface User{
  firstname:string;
  lastname:string;
  username:string;
  password:string;
}
